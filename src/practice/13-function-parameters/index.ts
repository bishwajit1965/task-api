interface Task {
  id: number;
  title: string;
}

function printTask(task: Task): void {
  console.log(`${task.id}: ${task.title}`);
}

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
};

printTask(task);