import mongoose from "mongoose";
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/task_api");
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process with an error code
  }
};
