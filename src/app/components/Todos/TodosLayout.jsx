import React, { PropTypes } from 'react';
import TodosList from './TodosList';
import TodoInput from './TodoInput';
import TodosFilter from './TodosFilter';

const TodosLayout = ({ filter }) => (
  <div className="container todos">
    <h1>Todos Layout</h1>
    <TodoInput />
    <TodosList todosFilter={filter}/>
    <TodosFilter />
  </div>
);

export default TodosLayout;