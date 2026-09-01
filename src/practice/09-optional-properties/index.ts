interface Task {
  id: number;
  title: string;
  description?: string;
}

const taskWithDescription: Task = {
  id: 1,
  title: "Learn TypeScript",
  description: "Study TypeScript fundamentals",
};

const taskWithoutDescription: Task = {
  id: 2,
  title: "Learn Testing",
};

console.log(taskWithDescription);
console.log(taskWithoutDescription);