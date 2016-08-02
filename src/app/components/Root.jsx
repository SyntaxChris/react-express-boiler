import App from './App';

const Root = ({store}) => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);