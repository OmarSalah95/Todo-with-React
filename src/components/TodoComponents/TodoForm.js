import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.addTask}>
      <input
        type="text"
        value={props.taskInput}
        name="taskInput"
        onChange={props.handleChanges}
        placeholder="Enter Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;



