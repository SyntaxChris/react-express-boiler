import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { deleteTodo } from '../../actions';
import { toggleTodo } from '../../actions';

class TodosList extends React.Component {

  // componentWillMount() {
  //   console.log('Component WILL MOUNT!')
  // }

  // componentDidMount() {
  //   console.log('Component DID MOUNT!')
  // }

  // componentWillReceiveProps(newProps) {    
  //   console.log('Component WILL RECIEVE PROPS!')
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Component WILL UPDATE!');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('Component DID UPDATE!')
  // }

  // componentWillUnmount() {
  //   console.log('Component WILL UNMOUNT!')
  // }

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
          // throw new Error(`Unknown filter: ${f}`)
          return todos;
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodosList);

