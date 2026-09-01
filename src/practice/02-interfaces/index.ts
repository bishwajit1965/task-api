interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
  completed: false,
};

console.log(task);