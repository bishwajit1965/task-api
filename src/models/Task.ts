import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITask extends Document {
    title: string;
    completed: boolean;
}

const taskSchema: Schema<ITask> = new Schema({
    title: { type: String, required: true, trim:true, },
    completed: { type: Boolean, default: false },
});

const Task: Model<ITask> = mongoose.model<ITask>("Task", taskSchema);

export default Task;