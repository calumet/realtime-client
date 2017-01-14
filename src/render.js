import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import settings from 'src/settings';
import store from 'src/store';
import routes from 'src/routes';

const history = syncHistoryWithStore(hashHistory, store);

const render = function () {
  const app = (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
  const root = document.querySelector(settings.el);
  ReactDOM.render(app, root);
};

export default render;
