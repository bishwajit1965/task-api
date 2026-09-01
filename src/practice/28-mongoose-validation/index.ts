import { connectDB } from "../../server/db.js";
import Task from "../../models/Task.js";

const run = async (): Promise<void> => {
  await connectDB();
  console.log("Database connected successfully");
  try {
    const task = await Task.create({
      title: 123 as any, // Will insert this wrong data instead of string as defined in interface
    });
    console.log("Task created:", task);
  } catch (error) {
    console.error("Error creating task:", error);
    process.exit(1); // Exit the process with an error code
  }
};

run();
