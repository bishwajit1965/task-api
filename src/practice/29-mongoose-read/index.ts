import { connectDB } from "../../server/db.js";
import Task from "../../models/Task.js";

const run = async (): Promise<void> => {
  await connectDB();
  console.log("Database connected successfully");
  try {
    const tasks = await Task.find();
    console.log("Tasks retrieved:", tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    process.exit(1); // Exit the process with an error code
  }
};

run();
