import React, { PropTypes } from 'react';

const Todo = ({ 
  completed, 
  text, 
  id,
  onToggleClick,
  onDeleteClick
}) => (
  <li>
    <span
      onClick={
        () => onToggleClick(id) 
      }>
      { JSON.stringify(completed) }
    </span>{'| '}
    <span>
      {text}
    </span>{' |'}
    <span onClick={
      () => onDeleteClick(id)
    }>
      x
    </span>
  </li>
);

export default Todo;