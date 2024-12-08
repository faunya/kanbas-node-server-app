import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        title: String,
        published: Boolean,
        desc: String,
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
        dueDate: String,
        availableDate: String,
        untilDate: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "quizzes" }
)

export default quizSchema;