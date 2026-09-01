// const message: string = "Hello from TypeScript";

// console.log(message);

type TaskStatus = "pending" | "completed";
type TaskId = number;

interface Task {
    readonly id: TaskId;
    title: string;
    status: TaskStatus;
    description?: string;
}

const task: Task = {
    id: 1,
    title: "Learn TypeScript",
    status: "pending",

};

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    status: "pending",

  },
  {
    id: 2,
    title: "Learn Testing",
    status: "completed",
    description: "Write API tests",
  },
  {
    id: 3,
    title: "Learn Docker",
    status: "pending",
  },
  {
    id: 4,
    title: "Learn CI/CD",
    status: "pending",
  },
];

function printTask(task: Task): void {
  console.log(`${task.id}: ${task.title}`);
}

function printTasks(tasks: Task[]): void {
  tasks.forEach((task) => {
    console.log(`${task.id}: ${task.title}`);
  });
}



const taskTitles: string[] = tasks.map(
  (task) => task.title
);

console.log("Task Titles:", taskTitles);


const firstTask = tasks[0];
const secondTask = tasks[1];
function getStatusMessage(status: TaskStatus): string {
  if (status === "completed") {
    return "Task is completed";
  }
  return "Task is pending";
}

if(firstTask){
    console.log(getStatusMessage(firstTask.status));

}

if(secondTask){
    console.log(getStatusMessage(secondTask.status));

}

function printDescription(task: Task): void {
  if (task.description) {
    console.log(`Description: ${task.description}`);
  } else {
    console.log("No description");
  }
}



printTask(task);

printTasks(tasks)
if (firstTask) {
    printDescription(firstTask);

}

console.log("Tasks", tasks);

