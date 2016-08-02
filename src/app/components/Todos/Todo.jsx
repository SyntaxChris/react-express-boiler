import React, { PropTypes } from 'react';

const Todo = ({ 
  completed, 
  text, 
  id,
  onTodoToggleClick,
  onDeleteTodoClick
}) => (
  <li>
    <span
      onClick={
        () => onTodoToggleClick(id) 
      }>
      { JSON.stringify(completed) }
    </span>{'| '}
    <span>
      {text}
    </span>{' |'}
    <span onClick={
      () => onDeleteTodoClick(id)
    }>
      x
    </span>
    <pre>{JSON.stringify(id)}</pre>
  </li>
);

export default Todo;