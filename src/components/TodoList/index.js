import React, { Component }  from 'react';
import './index.css'

class TodoList extends Component { // need to use component to access ref
    
    render(){
        return (
            <ul className="todolist">
              {this.props.todolist.map((task, i) => {
                return (
                  <li key={i}>
                    <input type="checkbox" onChange={(e) => {this.props.toggleCheck(e, i)}}/>
                    <span contentEditable="true"
                        ref="task"
                        className={task.done ? "cross" : null}
                        onBlur={(e) => {
                            this.props.updateTask(i, e.target.textContent)
                        }}>
                        {task.name}
                    </span>
                    <button onClick={(e) => {
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