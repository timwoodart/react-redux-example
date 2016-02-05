import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { App, Home, Dashboard } from './components';
import history from './utils/history';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="dashboard" component={Dashboard}/>
    </Route>
  </Router>
);
