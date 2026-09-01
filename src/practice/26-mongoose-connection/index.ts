import {connectDB} from "../../server/db.js";

const start = async (): Promise<void> => {
    try {
        await connectDB();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit the process with an error code
    }

}

start();