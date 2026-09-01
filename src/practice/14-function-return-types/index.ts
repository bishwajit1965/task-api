interface Task {
    id: number;
    title: string;
}

function getTaskTitle(task: Task): string {
    return task.title;
}

const task: Task = { id: 1, title: "Learn TypeScript" }

// Here the return type is checked - return type should be a string
const title: string = getTaskTitle(task);

console.log("Title:" , title);