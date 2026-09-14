import { useEffect, useState } from "react";
import "./App.css";
import type { TaskResponse } from "../../shared/types/taskResponse.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const [title, setTitle] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!successMessage) return;

    const timeoutId = setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [successMessage]);

  useEffect(() => {
    if (!error) return;

    const timeoutId = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [error]);

  console.log("TASKS", tasks);
  console.log("Editing Id", editingId);

  return (
    <div>
      <h1>Task List{tasks?.length ? ` (${tasks.length})` : ""}</h1>
      <p>{error && <span style={{ color: "red" }}>{error}</span>}</p>
      <p>
        {successMessage && (
          <span style={{ color: "green" }}>{successMessage}</span>
        )}
      </p>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const newTask = await createTask(title);
            setSuccessMessage("Task created successfully!");
            setTasks((currentTasks) => [...currentTasks, newTask]);
            setTitle("");
          } catch (error) {
            console.error(error);
            setError(
              error instanceof Error ? error.message : "Failed to create task",
            );
          }
        }}
      >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter task title"
        />

        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(event) => setEditingTitle(event.target.value)}
                />

                <button
                  onClick={async () => {
                    try {
                      const updatedTask = await updateTask(task.id, {
                        title: editingTitle,
                      });

                      setTasks((currentTasks) =>
                        currentTasks.map((currentTask) =>
                          currentTask.id === updatedTask.id
                            ? updatedTask
                            : currentTask,
                        ),
                      );
                      setSuccessMessage("Task updated successfully!");
                      setEditingId(null);
                      setEditingTitle("");
                    } catch (error) {
                      console.error(error);
                      setError("Failed to update task");
                    }
                  }}
                >
                  Save
                </button>

                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {index + 1}. {task.title} -{" "}
                {task.completed ? "Completed" : "Not Completed"}
                <button
                  onClick={() => {
                    setEditingId(task.id);
                    setEditingTitle(task.title);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={async () => {
                    try {
                      await deleteTask(task.id);

                      setTasks((currentTasks) =>
                        currentTasks.filter(
                          (currentTask) => currentTask.id !== task.id,
                        ),
                      );
                      setSuccessMessage("Task deleted successfully!");
                    } catch (error) {
                      console.error(error);
                      setError("Failed to delete task");
                    }
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
