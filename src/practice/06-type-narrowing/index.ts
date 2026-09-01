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
    completed: true,
  },
];

const firstTask = tasks[0];

if (firstTask) {
  console.log(`First task: ${firstTask.title}`);
}