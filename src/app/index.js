import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import configureStore from './configureStore';
import rootReducer from './reducers'; //data
import App from './components/App';
// import Root from './components/Root'; //ui
import './components/bundle.scss'; //assets

const persistedState = {
  todos: [{
    id: '0',
    text: 'Hello Persisted World',
    completed: false
  }]
}

const store = createStore(rootReducer, persistedState);

ReactDOM.render(
<Provider store={store}>
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
</Provider>, document.getElementById('react-root'));
