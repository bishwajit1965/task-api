interface Task {
  readonly id: number;
  title: string;
}

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
};

console.log(task);

task.title = "Learn Advanced TypeScript";

console.log(task);