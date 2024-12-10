import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        attempt: Number,
        points: Number,
        answers: Array,
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    },
    { collection: "questions" }
)

export default questionSchema;