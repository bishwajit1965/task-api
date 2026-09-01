import express from "express";
import { connectDB } from "./db.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

const PORT = 3000;

// It used to make express understand POST request body as JSON. Without this, the body of POST request will be undefined.
// express.json() is middleware that parses that JSON and makes it available as:
// Without it, req.body won't contain the parsed JSON we expect.
app.use(express.json());

app.use("/api", taskRoutes);

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
