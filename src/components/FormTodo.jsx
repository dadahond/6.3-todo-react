import { useState } from "react";
import { toast } from "sonner";

const FormTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      toast.success("Successfully added");
    } else {
      toast.warning("Please, fill all fields");

      return;
    }
    addTodo({
      id: Math.random(),
      title: title,
      completed: false,
    });
    setTitle(" ");
  };
  return (
    <form onSubmit={handelSubmit} className="formMain">
      <span className="formTitle"> To-do List</span>
      <div className="formCenter">
        <input
          className="inputTodo"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Type todo..."
        />
        <button className="submitButton">Add</button>
      </div>
    </form>
  );
};
export default FormTodo;
