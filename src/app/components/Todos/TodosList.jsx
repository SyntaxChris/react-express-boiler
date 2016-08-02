import React, { PropTypes } from 'react';

const Todo = ({ completed, text }) => (
  <li>
    <span>O</span><span>Todo</span><span>x</span>
  </li>
);

const TodosList = ({ todos }) => {
  const mapOfTodos = todos.map((todo, index) => {
    return(
      <Todo
        key={todo.id} 
        completed={todo.completed}
        text={todo.text}
      />
    )
  });

  return(
    <div className="todos-list">
      <ul>
        { mapOfTodos }
      </ul>
    </div>
  )
};

export default TodosList;