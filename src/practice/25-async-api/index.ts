interface Task {
    id: number;
    title: string;
}

async function getTask(): Promise<Task>{
    return { id: 1, title: "Learn TypeScript" };
}


async function main(): Promise<void> {
    const task = await getTask();

    console.log("Task:" , task);
    console.log("Title:" , task.title);
}

main();