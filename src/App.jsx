import { useState } from "react";
import TodoForm from "./components/conditional-redering/TodoForm";
import TodoFilter from "./components/conditional-redering/TodoFilter";
import TodoList from "./components/conditional-redering/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Build Todo App",
      completed: true,
    },
  ]);

  const [filter, setFilter] = useState("all");

  // Add Todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  // Filter Logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }

    if (filter === "pending") {
      return !todo.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <h1>Todo List App</h1>

      <TodoForm addTodo={addTodo} />

      <TodoFilter
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;