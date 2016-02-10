import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import history from './utils/history';
import { App, Home, Dashboard } from './components';

export default () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="dashboard" component={Dashboard}/>
    </Route>
  </Router>
);
