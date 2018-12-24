import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.addTask(this.refs.todo.value)
                this.refs.todo.value = ''
            }}>
                <input placeholder="Task" ref="todo" type="text"/>
                <button type="submit">Add Task</button>
            </form>
            );
      }
}

export default TodoForm