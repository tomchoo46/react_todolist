import React, { Component } from 'react';

class TodoForm extends Component { // need to use component to access ref
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.addTask(this.refs.task.value)
                this.refs.task.value = ''
            }}>
                <input placeholder="Task" ref="task" type="text"/>
                <button type="submit">Add Task</button>
            </form>
            );
      }
}

export default TodoForm