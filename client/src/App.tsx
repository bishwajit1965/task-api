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
  const [loading, setLoading] = useState(true);
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
      })
      .finally(() => {
        setLoading(false);
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
    <main className="app">
      <section className="task-container">
        <header className="task-header">
          <p className="eyebrow">Task API</p>{" "}
          <h1 className="task-header">Task Manager</h1>
          <p className="subtitle">
            Manage your tasks with a simple and clean interface.{" "}
          </p>
          <p className="subtitle">
            Learn{" "}
            <strong>TypeScript, Testing, CI/CD, Docker & Kubernates</strong> in
            this <strong>Task Api Project</strong>
          </p>
        </header>
        {error && <div className="message error">{error}</div>}{" "}
        {successMessage && (
          <div className="message success">{successMessage}</div>
        )}
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
                error instanceof Error
                  ? error.message
                  : "Failed to create task",
              );
            }
          }}
          className="task-form"
        >
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter task title"
          />

          <button type="submit">Add Task</button>
        </form>
        <div className="task-section">
          <div className="section-header">
            <h2>Total Tasks</h2>{" "}
            <span className="task-count">
              {tasks?.length ? ` ${tasks.length}` : ""}
            </span>{" "}
          </div>

          {loading ? (
            <div className="empty-state">Loading tasks...</div>
          ) : tasks?.length === 0 ? (
            <div className="empty-state">
              <strong>No tasks yet</strong>{" "}
              <span>Add your first task above.</span>{" "}
            </div>
          ) : (
            <div className="task-list">
              {tasks?.map((task, index) => (
                <article className="task-card" key={task.id}>
                  {editingId === task.id ? (
                    <div className="edit-area">
                      <input
                        value={editingTitle}
                        onChange={(event) =>
                          setEditingTitle(event.target.value)
                        }
                        aria-label="Edit task title"
                        autoFocus
                      />

                      <div className="task-actions">
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
                          className="button-primary"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => setEditingId(null)}
                          className="button-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="task-info">
                        <span className="task-number">{index + 1}</span>

                        <div className="">
                          <h3>
                            {task.title} →{" "}
                            <span
                              className={`status complete-status ${task.completed ? "completed" : "pending"}`}
                            >
                              {task.completed ? "Completed" : "Pending"}{" "}
                            </span>
                          </h3>
                        </div>
                      </div>

                      <div className="task-actions">
                        <button
                          onClick={() => {
                            setEditingId(task.id);
                            setEditingTitle(task.title);
                          }}
                          className="button-secondary"
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
                          className="button-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
