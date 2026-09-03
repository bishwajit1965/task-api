import Task from "../../models/Task.js";

export async function findTasksService(filter: { completed?: boolean }) {
  const tasks = await Task.find(filter);
  return tasks;
}

export async function findTaskByIdService(id: string) {
  const task = await Task.findById(id);
  return task;
}

export async function createTaskService(title: string) {
  const task = await Task.create({ title });
  return task;
}

export async function updateTaskService(id: string, title: string) {
  return Task.findByIdAndUpdate(id, { title }, { returnDocument: "after" });
}

export async function deleteTaskService(id: string) {
  return Task.findByIdAndDelete(id);
}
