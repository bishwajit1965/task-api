function throwError(message: string): never {
  throw new Error(message);
}

function failTask(): never {
  return throwError("Task failed");
}

console.log("Before error");

failTask();

console.log("After error");