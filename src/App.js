import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todolist: ['task3','task2','task1']
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
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
    todolistArray[i] = value
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
          updateTask={this.updateTask} />
      </div>
    );
  }
}

export default App;
