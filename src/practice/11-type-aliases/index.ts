type TaskId = number;

type TaskStatus = "pending" | "completed";

interface Task {
  id: TaskId;
  title: string;
  status: TaskStatus;
}

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
  status: "pending",
};

console.log(task);