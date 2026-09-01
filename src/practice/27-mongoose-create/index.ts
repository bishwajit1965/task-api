import { connectDB } from "../../server/db.js";
import  Task  from "../../models/Task.js";

const run =async (): Promise<void> => {
    try {
        await connectDB();
        console.log("Database connected successfully");
        const newTask = new Task({
            title: "Learn Mongoose",
            completed: false
        });
        await newTask.save();
      console.log("Task created successfully", newTask);

    } catch (error) {
        console.error("Error:", error);
    }
};

run();