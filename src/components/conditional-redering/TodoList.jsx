import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo }) {

  // Empty State UI
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Todos Found 😢</h3>
        <p>Please add a new todo.</p>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;