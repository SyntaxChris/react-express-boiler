import React, { PropTypes } from 'react';
import TodoLayout from './Todos/TodosLayout';

const App = ({ params }) => (
  <div className="container">
    <TodoLayout filter={ params.filter } />
  </div>
);

export default App;
