import React from 'react';
import "./Todo.css";

function Todo(props) {
  return (
    <li className={`task${props.task.completed ? ' completed' : ''}`} onClick={() => props.toggleTask(props.task.id)} >{props.task.task}</li>
  );
}

export default Todo;
