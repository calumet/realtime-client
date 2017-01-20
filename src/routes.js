import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'src/containers/App';

export default (
  <Route path='/'>
    <IndexRoute component={App} />
    <Route path='/sala/:roomId' component={App} />
    <Redirect from='*' to='/' />
  </Route>
);
