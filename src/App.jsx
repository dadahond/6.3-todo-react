import { useState } from "react";
// components
import TodoList from "./components/TodoList";
import FormTodo from "./components/FormTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Cleaning rooms",
      completed: false,
    },
    { id: 2, title: "Washing dishes", completed: true },
  ]);
  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };
  return (
    <>
      <FormTodo addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
export default App;
