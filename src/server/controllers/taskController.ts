import type { Request, Response } from "express";
import mongoose from "mongoose";
import type { TaskResponse } from "../../../shared/types/taskResponse.js";
import { createTaskSchema } from "../validators/taskValidator.js";

import {
  findTasksService,
  findTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from "../services/taskService.js";

interface CreateTaskBody {
  title: string;
}

interface TaskQuery {
  completed?: string;
}

// Create task
export async function createTask(
  req: Request<{}, {}, CreateTaskBody>,
  res: Response,
): Promise<void> {
  const body = createTaskSchema.safeParse(req.body);

  if (!body.success) {
    res.status(400).json({
      message: body.error.issues[0]?.message || "Invalid request body",
    });
    return;
  }

  const task = await createTaskService(body.data.title);

  const response: TaskResponse = {
    id: task._id.toString(),
    title: task.title,
    completed: task.completed,
  };

  res.status(201).json(response);
}

// Get all tasks
export async function getTasks(
  req: Request<{}, {}, {}, TaskQuery>,
  res: Response,
): Promise<void> {
  const { completed } = req.query;
  const filter: { completed?: boolean } = {};

  if (completed === "true") {
    filter.completed = true;
  } else if (completed === "false") {
    filter.completed = false;
  }

  const tasks = await findTasksService(filter);

  const response: TaskResponse[] = tasks.map((task) => ({
    id: task._id.toString(),
    title: task.title,
    completed: task.completed,
  }));

  res.json(response);
}

// Get task by ID
export async function getTaskById(
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> {
  const id = req.params.id;

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({
      message: "Invalid task ID",
    });
    return;
  }

  const task = await findTaskByIdService(id);

  if (!task) {
    res.status(404).json({
      message: "Task not found",
    });
    return;
  }

  res.json(task);
}

// Update task
export async function updateTask(req: Request, res: Response): Promise<void> {
  const body = req.body as { title?: unknown };

  if (typeof body.title !== "string" || body.title.trim() === "") {
    res.status(400).json({
      message: "Title is required and must be a non-empty string",
    });
    return;
  }

  const task = await updateTaskService(
    req.params.id as string,
    body.title.trim(),
  );

  if (!task) {
    res.status(404).json({
      message: "Task not found",
    });
    return;
  }

  const response: TaskResponse = {
    id: task._id.toString(),
    title: task.title,
    completed: task.completed,
  };

  res.json(response);
}

// Delete task by ID
export async function deleteTask(req: Request, res: Response): Promise<void> {
  const task = await deleteTaskService(req.params.id as string);

  if (!task) {
    res.status(404).json({
      message: "Task not found",
    });
    return;
  }

  res.json({
    message: "Task deleted successfully",
  });
}

// import type { Request, Response } from "express";

// import { tasks, type Task } from "../data/tasks.js";

// // TypeScript TypeCast rule to be applied

// interface CreateTaskBody {
//   id: number;
//   title: string;
// }

// // Get all tasks

// export function getTasks(_req: Request, res: Response): void {
//   res.json(tasks);
// }

// // Get task by Id

// export function getTaskById(req: Request, res: Response): void {
//   const id = parseInt(req.params.id as string);
//   const task = tasks.find((t) => t.id === id);

//   if (!task) {
//     res.status(404).json({ message: "Task not found" });
//     return;
//   }

//   res.json(task);
// }

// // Can also be written as:

// export function createTask(req: Request, res: Response): void {
//   const body = req.body as { title?: unknown };

//   if (typeof body.title !== "string" || body.title.trim() === "") {
//     res
//       .status(400)
//       .json({ message: "Title is required and must be a non-empty string" });
//     return;
//   }

//   const newTask: Task = {
//     id: tasks.length + 1,
//     title: body.title,
//   };

//   tasks.push(newTask);

//   res.status(201).json(newTask);
// }

// // export function createTask(
// //   req: Request,
// //   res: Response
// // ): void {
// //   const body = req.body as CreateTaskBody;

// //   const newTask: Task = {
// //     id: tasks.length + 1,
// //     title: body.title,
// //   };

// //   tasks.push(newTask);

// //   res.status(201).json(newTask);
// // }

// export function updateTask(req: Request, res: Response): void {
//   const id = Number(req.params.id);
//   const body = req.body as { title?: unknown };

//   const task = tasks.find((task) => task.id === id);

//   if (!task) {
//     res.status(404).json({
//       message: "Task not found",
//     });
//     return;
//   }

//   if (typeof body.title !== "string" || body.title.trim() === "") {
//     res.status(400).json({
//       message: "Title is required and must be a non-empty string",
//     });
//     return;
//   }

//   task.title = body.title.trim();

//   res.json(task);
// }

// // Delete task by Id

// export function deleteTask(req: Request, res: Response): void {
//   const id = Number(req.params.id);

//   const taskIndex = tasks.findIndex((task) => task.id === id);

//   if (taskIndex === -1) {
//     res.status(404).json({
//       message: "Task not found",
//     });
//     return;
//   }

//   tasks.splice(taskIndex, 1);

//   res.json({
//     message: "Task deleted successfully",
//   });
// }
