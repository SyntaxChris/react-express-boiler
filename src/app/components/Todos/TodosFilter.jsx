import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setTodoFilter } from '../../actions';

const FilterLink = ({ filter, children }) => (
  <Link 
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}>
    { children }
  </Link>
);

const TodosFilter = ({ dispatch }) => {
  return(
    <div>
      <FilterLink filter={'all'} >All</FilterLink>{' '}
      <FilterLink filter={'active'} >Active</FilterLink>{' '}
      <FilterLink filter={'completed'} >Completed</FilterLink>
    </div>
  )
};


export default connect()(TodosFilter);
