const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
import type { TaskResponse } from "../../../shared/types/taskResponse.js";

export const getTasks = async (): Promise<TaskResponse[]> => {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data;
};

export const createTask = async (title: string): Promise<TaskResponse> => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create task");
  }
  const data = await response.json();
  return data;
};

export const updateTask = async (
  id: string,
  updates: Partial<TaskResponse>,
): Promise<TaskResponse> => {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  const data = await response.json();
  return data;
};

export const deleteTask = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};
