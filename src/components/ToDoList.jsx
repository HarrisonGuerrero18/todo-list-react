import useToDoList from "../hooks/useToDoList";
import "../index.css";

export default function ToDoList() {
  const { tasks, newTask, setNewTask, addTask, deleteTask, toggleCompleted } =
    useToDoList();

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Lista de Tareas</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button
          className="p-2 cursor-pointer bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          onClick={addTask}
        >
          Agregar tarea
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-2 border border-gray-300 rounded-lg ${
              task.completed ? "bg-gray-100 line-through" : ""
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)} 
                className="mr-2"
              />
              <span>{task.text}</span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-1 cursor-pointer text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}