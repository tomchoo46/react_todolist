import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todolist: [
        {name: 'task3', done: false},
        {name: 'task2', done: false},
        {name: 'task1', done: false},
      ]
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.toggleCheck = this.toggleCheck.bind(this)
  }

  addTask(task){
    this.setState({
      todolist: [task, ...this.state.todolist]
    })
  }

  deleteTask(i){
    // console.log(this.state.todolist)
    var todolistArray = [...this.state.todolist]
    todolistArray.splice(i,1)
    this.setState({
      todolist: [...todolistArray]
    })
  }

  updateTask(i, value){
    let todolistArray = [...this.state.todolist]
    todolistArray[i].name = value
    this.setState({
      todolist: [...todolistArray]
    })
  }

  toggleCheck(e, i){
    let todolistArray = [...this.state.todolist]
    todolistArray[i].done = e.target.checked
    this.setState({
      todolist: [...todolistArray]
    })    
  }

  render() {
    return (
      <div className="App">
        <h1>React To-do list</h1>
        <TodoForm addTask={this.addTask}/>
        <TodoList todolist={this.state.todolist}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          toggleCheck={this.toggleCheck} />
      </div>
    );
  }
}

export default App;
