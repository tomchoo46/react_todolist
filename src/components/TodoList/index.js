import React, { Component }  from 'react';

class TodoList extends Component { // need to use component to access ref
    
    render(){
        return (
            <ul>
              {this.props.todolist.map((task, i) => {
                return (
                  <li key={i}>
                    <span contentEditable="true"
                        ref="task"
                        onBlur={(e) => {
                            this.props.updateTask(i, e.target.textContent)
                        }}>
                        {task}
                    </span>
                    <button onClick={(e) => {
                        e.preventDefault()
                        this.props.deleteTask(i)
                    }}>
                        Delete
                    </button>
                </li>
                )
              })}
            </ul>
        )    
    }
}

export default TodoList