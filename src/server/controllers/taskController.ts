import type { Request, Response } from "express";
import Task from "../../models/Task.js";
import mongoose from "mongoose";

// Get all tasks
export async function getTasks(_req: Request, res: Response): Promise<void> {
  const tasks = await Task.find();

  res.json(tasks);
}

// Get task by ID
export async function getTaskById(req: Request, res: Response): Promise<void> {
  const id = req.params.id;

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({
      message: "Invalid task ID",
    });
    return;
  }

  const task = await Task.findById(id);

  if (!task) {
    res.status(404).json({
      message: "Task not found",
    });
    return;
  }

  res.json(task);
}

// Create task
export async function createTask(req: Request, res: Response): Promise<void> {
  const body = req.body as { title?: unknown };

  if (typeof body.title !== "string" || body.title.trim() === "") {
    res.status(400).json({
      message: "Title is required and must be a non-empty string",
    });
    return;
  }

  const task = await Task.create({
    title: body.title.trim(),
  });

  res.status(201).json(task);
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

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: body.title.trim(),
    },
    {
      returnDocument: "after",
    },
  );

  if (!task) {
    res.status(404).json({
      message: "Task not found",
    });
    return;
  }

  res.json(task);
}

// Delete task by ID
export async function deleteTask(req: Request, res: Response): Promise<void> {
  const task = await Task.findByIdAndDelete(req.params.id);

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
