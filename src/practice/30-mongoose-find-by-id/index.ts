import { connectDB } from "../../server/db.js";
import Task from "../../models/Task.js";

const run = async (): Promise<void> => {
  await connectDB();
  console.log("Database connected successfully");
  try {
    const taskId = "6a96d56f2e823f640355a7fd"; // Replace with a valid task ID
    const task = await Task.findById(taskId);
    if (task) {
      console.log("Task found:", task);
    } else {
      console.log("Task not found");
    }
  } catch (error) {
    console.error("Error retrieving task by ID:", error);
    process.exit(1); // Exit the process with an error code
  }
};

run();
