import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
          {props.todolist.map((todo, i) => {
            return (
              <li key={i}>
                {todo} 
                <button onClick={(e) => {
                    e.preventDefault()
                    props.deleteTask(i)
                }}>
                    Delete
                </button>
            </li>
            )
          })}
        </ul>
    )
}

export default TodoList