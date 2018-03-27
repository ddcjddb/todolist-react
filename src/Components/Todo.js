import React from "react";

const Todo = props => (
  <li className="todo" style={{ listStyle: "none" }}>
    <input
      type="button"
      value="移除"
      onClick={() => props.removeTodo(props.todo.id)}
    />
    <p
      style={{ textDecoration: props.todo.completed ? "line-through" : "none" }}
    >
      {props.todo.text}
    </p>
    <input
      type="button"
      value={!props.todo.completed ? "完成" : "取消"}
      onClick={() => props.handleDone(props.todo.id)}
    />
  </li>
);

export default Todo;
