import { useEffect, useState } from "react";
import "./App.css";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./services/taskService";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("TASKS", tasks);
  console.log("Editing Id", editingId);

  return (
    <div>
      <h1>Task List{tasks?.length ? ` (${tasks.length})` : ""}</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!title.trim()) return;

          try {
            const newTask = await createTask(title);

            setTasks((currentTasks) => [...currentTasks, newTask]);
            setTitle("");
          } catch (error) {
            console.error(error);
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

                      setEditingId(null);
                      setEditingTitle("");
                    } catch (error) {
                      console.error(error);
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
                    } catch (error) {
                      console.error(error);
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
