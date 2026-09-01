interface Task {
  id: number;
  title: string;
}

function printTask(task: Task): void {
  console.log(`${task.id}: ${task.title}`);
}

function getTaskTitle(task: Task): string {
  return task.title;
}

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
};

printTask(task);

const title = getTaskTitle(task);

console.log("Returned title:", title);