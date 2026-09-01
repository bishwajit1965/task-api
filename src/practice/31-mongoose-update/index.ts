import { connectDB } from "../../server/db.js";
import Task from "../../models/Task.js";

const run = async (): Promise<void> => {
  await connectDB();
  console.log("Database connected successfully");
  try {
    const task = await Task.findByIdAndUpdate(
      "6a96d56f2e823f640355a7fd",
      { title: "Learn Mongoose CRUD" },
      { returnDocument: "after" },
    );
    console.log("Task updated:", task);
    if (!task) {
      console.log("Task not found");
    }
  } catch (error) {
    console.error("Error updating task:", error);
    process.exit(1); // Exit the process with an error code
  }
};

run();
