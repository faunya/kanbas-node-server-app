import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        title: String,
        questType: String,
        points: Number,
        question: String,

        //multiple choice
        choices: Array,

        //true or false
        trueFalse: Boolean,

        //fill in the blank
        blankAns: Array,

        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    },
    { collection: "questions" }
)

export default questionSchema;