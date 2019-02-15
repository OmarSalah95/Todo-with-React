import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./app.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskArray: window.localStorage.getItem("taskArray")
      ? JSON.parse(window.localStorage.getItem("taskArray"))
      : [],
      taskInput: ""
    };
  }
  
  // Create the New task
  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    };
    //  Spread the existing array adding the new task
    this.setState(
      {
        taskArray: [...this.state.taskArray, newTask],
        taskInput: ""
      },
      () =>
        window.localStorage.setItem(
          "taskArray",
          JSON.stringify(this.state.taskArray)
        )
    );
  };

  clearAll = e => {
    e.preventDefault();
    this.setState({
      taskArray: []
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      taskArray: JSON.parse(window.localStorage.getItem("taskArray")).filter(task => !task.completed)
    },
    () => window.localStorage.setItem("taskArray", JSON.stringify(this.state.taskArray)))
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleTask = targetId => {
    this.setState({
      taskArray: JSON.parse(window.localStorage.getItem("taskArray")).map(task => {
        if (targetId === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    },
    () => window.localStorage.setItem("taskArray",JSON.stringify(this.state.taskArray)));
  };

  render() {
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoList
          taskArray={this.state.taskArray}
          toggleTask={this.toggleTask}
        />
        <TodoForm
          addTask={this.addTask}
          taskInput={this.state.taskInput}
          handleChanges={this.handleChanges}
          clearCompleted={this.clearCompleted}
        />
        <button onClick={this.clearAll}>Clear All</button>
      </div>
    );
  }
}

export default App;
