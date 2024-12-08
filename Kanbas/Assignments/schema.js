import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        points: Number,
        dueDate: String,
        availableDate: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "assignments" }
)

export default assignmentSchema;