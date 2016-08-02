import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTodoFilter } from '../../actions';

const FilterLink = ({ setFilter, filter, children }) => (
  <a href="#"
    onClick={(e) => {
      e.preventDefault();
      setFilter(filter)
    }
  }>{children}</a>
);

const TodosFilter = ({ dispatch }) => {
  const filterTodo = (filter) => {
    dispatch(setTodoFilter(filter))
  };

  return(
    <div>
      <FilterLink setFilter={filterTodo} filter={'all'} >All</FilterLink>{' '}
      <FilterLink setFilter={filterTodo} filter={'active'} >Active</FilterLink>{' '}
      <FilterLink setFilter={filterTodo} filter={'completed'} >Completed</FilterLink>
    </div>
  )
};


export default connect()(TodosFilter);
