import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./Loading";

export function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos((prevTodos) => {
          const localTodos = prevTodos.filter((t) => !t.api);
          return [
            ...response.data.map((t) => ({ ...t, api: true })),
            ...localTodos,
          ];
        });
      } catch (error) {
        console.error("Error fetching todos:", error);
        setError("Failed to load todos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: inputValue.trim(),
      completed: false,
      api: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save edited todo
  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editText } : todo
      )
    );
    setEditingId(null);
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={addTodo}>
        {" "}
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      {loading ? (
        <p>
          <Loading />
        </p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : todos.length === 0 ? (
        <p className="todo-empty">No tasks yet. Add one above!</p>
      ) : (
        <ul className="interactive-todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="interactive-todo-item">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />

              {editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="save-button"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={`todo-text ${todo.completed ? "completed" : ""}`}
                  >
                    {todo.title}
                  </span>
                  <button
                    onClick={() => startEditing(todo.id, todo.title)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </>
              )}

              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
