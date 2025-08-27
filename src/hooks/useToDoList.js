import { useState } from "react";

export default function useToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]); // ✅ FIX

    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    newTask,
    setNewTask,
    addTask,
    deleteTask,
    toggleCompleted,
  };
}
