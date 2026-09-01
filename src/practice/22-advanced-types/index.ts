interface PendingTask {
    status: "pending";
    title: string;
}

interface CompletedTask {
    status: "completed";
    title: string;
    completedAt: string;
}

type Task = PendingTask | CompletedTask;


function printTask(task: Task): void{
    console.log(`Task: ${task.title}`);
    if (task.status === "completed") {
    console.log(`Completed at: ${task.completedAt}`);
  } else {
    console.log("Task is still pending");
  }
}

const pendingTask: Task = {
  status: "pending",
  title: "Learn TypeScript",
};

const completedTask: Task = {
  status: "completed",
  title: "Learn Testing",
  completedAt: "2026-08-31",
};

printTask(pendingTask);
printTask(completedTask);