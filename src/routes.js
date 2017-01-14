import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'src/containers/App';

export default (
  <Route path='/' component={App}></Route>
);

// TODO: Use routes.
// <IndexRoute component={App} />
// <Route path='/sala/:roomId' component={App} />
