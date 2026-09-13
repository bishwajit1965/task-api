import Task from "../../models/Task.js";

// CREATE TASK SERVICE
export async function createTaskService(title: string) {
  const task = await Task.create({ title });
  return task;
}

// FIND TASKS SERVICE
export async function findTasksService(filter: { completed?: boolean }) {
  const tasks = await Task.find(filter);
  return tasks;
}

// FIND TASK BY ID SERVICE
export async function findTaskByIdService(id: string) {
  const task = await Task.findById(id);
  return task;
}

// UPDATE TASK SERVICE
export async function updateTaskService(id: string, title: string) {
  return Task.findByIdAndUpdate(id, { title }, { returnDocument: "after" });
}

// DELETE TASK SERVICE
export async function deleteTaskService(id: string) {
  return Task.findByIdAndDelete(id);
}
