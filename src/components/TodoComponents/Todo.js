import React from 'react';

function Todo(props) {
  return (
    <li className="todo-item" onClick={() => props.toggleTask(props.task.id)} >{props.task.task}</li>
  );
}

export default Todo;
