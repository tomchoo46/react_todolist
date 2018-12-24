import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todolist: ['1','2','32']
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(todo){
    this.setState({
      todolist: [...this.state.todolist, todo]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React To-do list</h1>
        <TodoForm addTask={this.addTask}/>
        <TodoList todolist={this.state.todolist}/>
      </div>
    );
  }
}

export default App;
