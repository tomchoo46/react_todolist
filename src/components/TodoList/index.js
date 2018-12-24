import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
          {props.todolist.map((todo, i) => {
            return (
              <li key={i}>{todo}</li>
            )
          })}
        </ul>
    )
}

export default TodoList