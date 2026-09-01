type TaskStatus = "pending" | "completed";

function getStatusMessage(status: TaskStatus): string {
  if (status === "completed") {
    return "Task is completed";
  }

  return "Task is pending";
}

console.log(getStatusMessage("pending"));
console.log(getStatusMessage("completed"));