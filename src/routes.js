// ./src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import User from './components/user/UserPage';
import Group from './components/group/GroupPage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/users" component={User} />
    <Route path="/groups" component={Group} />
  </Route>
);
