import mongoose from "mongoose";
import { afterAll, beforeAll, expect, test } from "vitest";

import { connectDB } from "../../src/server/db.js";
import { createTaskService } from "../../src/server/services/taskService.js";
import Task from "../../src/models/Task.js";

beforeAll(async () => {
  await connectDB();
});

test("creates and persists a task", async () => {
  const task = await createTaskService("Learn Testing Vitest");

  const savedTask = await Task.findById(task._id);

  expect(savedTask).not.toBeNull();
  expect(savedTask?.title).toBe("Learn Testing Vitest");
  expect(savedTask?.completed).toBe(false);
});

// test("creates a task", async () => {
//   const task = await createTaskService("Learn Testing");

//   expect(task.title).toBe("Learn Testing");
//   expect(task.completed).toBe(false);
//   expect(task._id).toBeDefined();
// });

afterAll(async () => {
  await mongoose.disconnect();
});
