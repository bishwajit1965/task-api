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

// filter()
const completedTasks: Task[] = tasks.filter(
  (task) => task.completed
);

console.log("Completed Tasks:", completedTasks);

// map()
const taskTitles: string[] = tasks.map(
  (task) => task.title
);

console.log("Task Titles:", taskTitles);

// find()
const foundTask: Task | undefined = tasks.find(
  (task) => task.id === 2
);

console.log("Found Task:", foundTask);