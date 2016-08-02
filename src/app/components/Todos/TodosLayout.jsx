import React, { PropTypes } from 'react';
import TodosList from './TodosList';
import TodoInput from './TodoInput';

const TodosLayout = () => (
  <div className="">
    <h1>Todos Layout</h1>
    <TodoInput />
    <TodosList />
  </div>
);

export default TodosLayout;