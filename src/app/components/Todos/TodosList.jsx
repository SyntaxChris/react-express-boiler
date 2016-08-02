import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { deleteTodo } from '../../actions';
import { toggleTodo } from '../../actions';

class TodosList extends React.Component {
  render(){
    const { 
      todos,
      todosFilter, 
      dispatch
    } = this.props; 

    const onToggleClick = (id) => {
      dispatch(toggleTodo(id))
    };

    const onDeleteClick = (id) => {
      dispatch(deleteTodo(id))
    };

    const visibleTodos = (todos, f) => {
      switch(f){
        case 'all':
          return todos;
        case 'active':
          return todos.filter(t => !t.completed)
        case 'completed':
          return todos.filter(t => t.completed)
        default:
          throw new Error(`Unknown filter: ${f}`)
      }
    }

    const mapOfTodos = visibleTodos(todos, todosFilter).map((todo, index) => {
      return(
        <Todo
          key={todo.id} 
          {...todo}
          onToggleClick={onToggleClick}
          onDeleteClick={onDeleteClick}
        />
      );
    });

    return(
      <div className="todos-list">
        <ul>
          { mapOfTodos }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  todosFilter: state.todosFilter
});

export default connect(mapStateToProps)(TodosList);

