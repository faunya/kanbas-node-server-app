import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        title: String,
        quizType: String,
        points: Number,
        assignmentGroup: String,
        shuffle: Boolean,
        timeLimit: Number,
        multiAttempt: Boolean,
        numAttempt: Number,
        showCorrectAnswers: Boolean,
        accessCode: String,
        oneQuestAtTime: Boolean,
        webcam: Boolean,
        lockQuestions: Boolean,
        dueDate: Date,
        availableDate: Date,
        untilDate: Date,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "quizzes" }
)

export default quizSchema;