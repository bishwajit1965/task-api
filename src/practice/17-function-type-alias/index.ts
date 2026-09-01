interface Task {
    id: number;
    title: string;

}

type taskPrinter = (task: Task) => void;

const printTask: taskPrinter = (task) => {
    console.log(`${task.id } : ${task.title}`);
}

const task: Task = {
    id: 1,
    title: "Learn TypeScript",
}

printTask(task)