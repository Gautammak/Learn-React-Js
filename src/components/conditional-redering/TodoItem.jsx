function TodoItem({ todo, toggleTodo }) {
  return (
    <div className="todo-item">
      <p className={todo.completed ? "completed" : ""}>
        {todo.text}
      </p>

      <div>
        {/* Conditional Badge */}
        {todo.completed ? (
          <span className="badge done">
            Completed
          </span>
        ) : (
          <span className="badge pending">
            Pending
          </span>
        )}

        <button
          onClick={() => toggleTodo(todo.id)}
          style={{ marginLeft: "10px" }}
        >
          Toggle
        </button>
      </div>
    </div>
  );
}

export default TodoItem;