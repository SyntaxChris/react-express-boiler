import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { deleteTodo } from '../../actions';
import { toggleTodo } from '../../actions';

// const TodosList = ({ todos, dispatch }) => {
//   const onTodoToggleClick = (id) => {
//     dispatch(toggleTodo(id))
//   };

//   const onDeleteTodoClick = (id) => {
//     dispatch(deleteTodo(id))
//   };

//   const mapOfTodos = todos.map((todo, index) => {
//     return(
//       <Todo
//         key={todo.id} 
//         {...todo}
//         onTodoToggleClick={onTodoToggleClick}
//         onDeleteClick={onDeleteTodoClick}
//       />
//     )
//   });

//   return(
//     <div className="todos-list">
//       <ul>
//         { mapOfTodos }
//       </ul>
//     </div>
//   )
// }

class TodosList extends React.Component {
  // componentWillReceiveProps(newProps) {    
  //   console.log('Component WILL RECIEVE PROPS!')
  // }

  render(){
    const { 
      todos, 
      dispatch
    } = this.props; 

    const onTodoToggleClick = (id) => {
      dispatch(toggleTodo(id))
    };

    const onDeleteTodoClick = (id) => {
      dispatch(deleteTodo(id))
    };

    const mapOfTodos = todos.map((todo, index) => {
      return(
        <Todo
          key={todo.id} 
          {...todo}
          onTodoToggleClick={onTodoToggleClick}
          onDeleteTodoClick={onDeleteTodoClick}
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
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos 
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   deleteTodo() {
//     dispatch(
//       deleteTodo(ownProps.id)
//     );
//   },
//   toggleTodo() {
//     dispatch(
//       toggleTodo(ownProps.id)
//     );
//   }
// });

// const TodosConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodosList);

// export default TodosConnect;

export default connect(mapStateToProps)(TodosList);

