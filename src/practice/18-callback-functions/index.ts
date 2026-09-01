interface Task {
    id: number;
    title: String;
}

type taskCallback = (task: Task) => void;


const tasks: Task[] = [
    { id: 1, title: "Learn TypeScript" },
    { id: 2, title: "Learn Testing" },
]

function processTasks(tasks: Task[], callback: taskCallback):void {
    tasks.forEach(callback)
}

processTasks(tasks, (task) => {
    console.log(`${task.id} : ${task.title}`);
})