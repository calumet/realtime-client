// TODO: Add language to settings and set the moment locale as it is.

import 'babel-polyfill';
import settings from 'src/settings';
import render from 'src/render';
import store from 'src/store';
import actions from 'src/actions';
import ws from 'src/ws';

const realtime = {

  start (newSettings) {
    realtime._configure(newSettings);
    render();
    ws.connect();
    actions.app.start();
  },

  _configure (newSettings) {

    if (typeof newSettings !== 'object') {
      throw new Error('Settings must be an object.');
    }

    if (typeof newSettings.server !== 'string' || !(/^https?:\/\//).test(newSettings.server)) {
      throw new Error('Property "server" must be an string URL.');
    }

    if (typeof newSettings.userId !== 'string') {
      throw new Error('Property "userId" must be an string.');
    }

    if (typeof newSettings.spaceCode !== 'string') {
      throw new Error('Property "spaceCode" must be an string.');
    }

    const server = String(newSettings.server).replace(/\/$/, '');

    Object.assign(settings, newSettings, { server });
  },
};

// Debugging.
if (process.env.NODE_ENV !== 'production') {
  realtime._settings = settings;
  realtime._store = store;
  realtime._actions = actions;
  realtime._ws = ws;
}

export default realtime;
