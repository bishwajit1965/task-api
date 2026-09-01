import { connectDB } from "../../server/db.js";
import Task from "../../models/Task.js";

const run = async (): Promise<void> => {
  await connectDB();
  console.log("Database connected successfully");
  try {
    const tasks = await Task.findByIdAndDelete("6a96d56f2e823f640355a7fd"); // Replace with a valid task ID
    console.log("Task deleted:", tasks);
  } catch (error) {
    console.error("Error deleting task:", error);
    process.exit(1); // Exit the process with an error code
  }
};

run();
