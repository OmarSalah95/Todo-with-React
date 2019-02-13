import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './app.css';

const taskArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      taskArray: taskArray,
      taskInput: ''
    }
  };
// Create the New task
  addTask = e => {
    e.preventDefault();

    const newTask = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    }
//  Spread the existing array adding the new task    
    this.setState({
      taskArray: [...this.state.taskArray, newTask],
      taskInput: ''
    });

  };
  
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoList taskArray={this.state.taskArray} />
        <TodoForm addTask={this.addTask} taskInput={this.state.taskInput} handleChanges={this.handleChanges} />
      </div>
    );
  }
}

export default App;
