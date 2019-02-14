import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul className="todo-list">
    {props.taskArray.map((taskOfMap, index) => (
      <Todo key={index} task={taskOfMap} toggleTask={props.toggleTask} />
    ))}
  </ul>
);

export default TodoList;
