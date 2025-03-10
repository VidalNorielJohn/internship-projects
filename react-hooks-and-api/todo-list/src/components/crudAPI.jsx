import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos"; 
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Read (Fetch Todos)
  useEffect(() => {
    fetch(API_URL + "?_limit=5") 
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  // Create (Add Todo)
  const addTodo = () => {
    if (!newTodo.trim()) return;

    const todo = { title: newTodo, completed: false };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => setTodos([...todos, data]))
      .catch((err) => console.error("Error adding todo:", err));

    setNewTodo(""); // Clear input field
  };

  // Update (Toggle Todo Completion)
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);

    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !todos.find((todo) => todo.id === id).completed,
      }),
    }).catch((err) => console.error("Error updating todo:", err));
  };

  // Delete (Remove Todo)
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).catch((err) => console.error("Error deleting todo:", err));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Add Todo */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new task..."
      />
      <button onClick={addTodo}>Add</button>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
