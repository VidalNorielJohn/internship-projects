import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./components/Loading";
import { TodoList } from "./components/TodoList";
import "./style/App.css";
import "./style/TodoList.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        setTodos(result.data.slice(0, 10));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setError("Failed to load todos. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Random Doggeh Image
  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogImage(result.data.message);
      } catch (error) {
        console.error("Error fetching image:", error);
        setError("Failed to load dog image. Please try again later.");
      }
    };

    fetchDogImage();
  }, []);

  const refreshDogImage = async () => {
    try {
      setDogImage(null);
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(result.data.message);
    } catch (error) {
      console.error("Error fetching image:", error);
      setError("Failed to load new dog image. Please try again later.");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React API Demo</h1>
      </header>

      <main className="content-container">
        <section className="card todo-section">
          <div className="card-header">
            <h2>Interactive Todo List</h2>
          </div>
          <div className="card-content">
            {" "}
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </section>

        <section className="card fetched-todos-section">
          <div className="card-header">
            <h2>API Fetched Todos</h2>
          </div>
          <div className="card-content">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              <ul className="todo-list">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className={todo.completed ? "completed" : ""}
                  >
                    <span className="todo-title">{todo.title}</span>
                    {todo.completed && <span className="todo-status">✓</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="card dog-section">
          <div className="card-header">
            <h2>Random Dog</h2>
            <button
              className="refresh-button"
              onClick={refreshDogImage}
              disabled={!dogImage}
            >
              New Dog
            </button>
          </div>
          <div className="card-content dog-image-container">
            {!dogImage ? (
              <Loading />
            ) : (
              <img
                src={dogImage}
                alt="Random Dog"
                className="dog-image"
                onError={(e) => {
                  setError("Failed to load image. Please try again.");
                  e.target.style.display = "none";
                }}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
