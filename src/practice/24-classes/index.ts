class Task {
  constructor(
    public id: number,
    public title: string,
    public status: "pending" | "completed"
  ) {}

  print(): void {
    console.log(`${this.id}: ${this.title} - ${this.status}`);
  }
}

const task = new Task(
  1,
  "Learn TypeScript",
  "pending"
);

task.print();