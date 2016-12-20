import settings from 'settings';
import render from 'core/render';
import store from 'core/store';
import actions from 'core/actions';
import ws from 'core/ws';

const realtime = {

  _validate (newSettings) {

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

  start (newSettings) {
    realtime._validate(newSettings);
    render();
    ws.connect();
    actions.app.start();
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
