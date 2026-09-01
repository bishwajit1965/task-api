interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Testing",
    completed: false,
  },
];

console.log(tasks);