import { useState, useEffect } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date"); // 'date', 'alphabetical'

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "alphabetical") {
      return a.text.localeCompare(b.text);
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
      <form onSubmit={addTask} className="mb-8">
        <div className="flex gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
            className="input flex-1"
          />
          <button
            type="submit"
            className="btn-primary px-6 py-3 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Add Task
          </button>
        </div>
      </form>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="input cursor-pointer bg-white"
        >
          <option value="all">All Tasks</option>
          <option value="active">Active Tasks</option>
          <option value="completed">Completed Tasks</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="input cursor-pointer bg-white"
        >
          <option value="date">Sort by Date</option>
          <option value="alphabetical">Sort Alphabetically</option>
        </select>
      </div>

      <ul className="space-y-4">
        {sortedTasks.map((task) => (
          <li
            key={task.id}
            className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded-md border-2 border-gray-300 text-primary-500 focus:ring-primary-500 cursor-pointer transition-all duration-200"
              />
              <span
                className={`text-lg ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                } transition-all duration-200`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 opacity-0 group-hover:opacity-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-3 py-1 transition-all duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            No tasks yet. Add one above to get started!
          </p>
        </div>
      )}

      {tasks.length > 0 && (
        <div className="mt-6 text-sm text-gray-500 text-center">
          {tasks.filter((t) => !t.completed).length} tasks remaining
        </div>
      )}
    </div>
  );
};

export default Todo;
