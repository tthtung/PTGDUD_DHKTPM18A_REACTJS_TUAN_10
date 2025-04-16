import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  removeTodo,
} from "../components/redux_toolkit/todoSlice";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={{height: "100vh", padding: "20px"}}>
      <h2>Redux toolkit</h2>
      <h2>To-do List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Thêm công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(removeTodo(todo.id));
              }}
              style={{ marginLeft: "10px" }}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
