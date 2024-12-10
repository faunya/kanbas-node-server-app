import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
    {
        attempt: Number,
        startDate: String,
        points: Number,
        answers: Array,
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    },
    { collection: "quizAttempts" }
)

export default quizAttemptSchema;