const TodoItem = ({ todo, setTodos }) => {
  const changeStatus = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };
  return (
    <li
      id="todoItem"
      key={todo.id}
      className={`${todo.completed ? "completed" : ""}`}
    >
      <h4 className="todoTitle">{todo.title}</h4>

      {!todo.completed && (
        <button className="itemButton" onClick={() => changeStatus(todo.id)}>
          Done
        </button>
      )}
      {todo.completed && (
        <button className="itemButton" onClick={() => changeStatus(todo.id)}>
          Undo
        </button>
      )}
      <button className="itemButton" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
