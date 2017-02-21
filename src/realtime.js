// TODO: Add language to settings and set the moment locale as it is.

import settings from 'src/settings';
import render from 'src/render';
import actions from 'src/actions';
import store from 'src/store';
import ws from 'src/ws';

const realtime = {

  _status: {
    initialized: false
  },

  start (newSettings) {

    if (realtime._status.initialized) {
      throw new Error('Realtime is already initialized.');
    }

    realtime._configure(newSettings);
    render();
    ws.connect();

    realtime._status.initialized = true;
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
