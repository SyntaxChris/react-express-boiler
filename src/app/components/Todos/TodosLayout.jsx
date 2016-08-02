import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodosList from './TodosList';

export default class TodosLayout extends React.Component {
  render(){
    // let todos = [
    //   {id: 1, completed: false, text: "Hello World"},
    //   {id: 2, completed: true, text: "I'm Complete"},
    //   {id: 3, completed: false, text: "I'm not complete"},
    //   {id: 4, completed: true, text: "I'm also complete"},
    //   {id: 5, completed: false, text: "I'm also not so complete :("}
    // ];
    const { todos } = this.props;
    debugger;
    return(
      <div className="container todos">
        <h1>Todos Layout</h1>
        <TodosList todos={todos}/>
        <pre>{JSON.stringify(todos)}</pre>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(addTodo(ownProps.text));
  }
});

const TodosConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosLayout);

export default TodosConnect;