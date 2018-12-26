import React, { Component } from 'react';

class TodoForm extends Component { // need to use component to access ref
    requestAdd(e){
        e.preventDefault()
        let task = {
            name: this.refs.task.value,
            done: false
        }
        this.props.addTask(task)
        this.refs.task.value = ''
    }

    render() {
        return (
            <form onSubmit={(e) => {
                this.requestAdd(e)
            }}>
                <input placeholder="Task" ref="task" type="text"/>
                <button type="submit">Add Task</button>
            </form>
            );
      }
}

export default TodoForm