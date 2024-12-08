import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema(
    {
        questType: String, //True/false question, Multiple choice question, Fill in a blank question
        
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
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    },
    { collection: "quizQuestions" }
)

export default quizQuestionSchema;