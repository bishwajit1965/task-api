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
  {
    id: 3,
    title: "Learn Docker",
    completed: false,
  },
];

const foundTask: Task | undefined = tasks.find(
  (task) => task.id === 99
);

if (foundTask) {
  console.log(`Found: ${foundTask.title}`);
} else {
  console.log("Task not found");
}