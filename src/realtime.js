import moment from 'moment';
import axios from 'axios';
import settings from 'src/settings';
import render from 'src/render';
import actions from 'src/actions';
import store from 'src/store';
import ws from 'src/ws';

/**
 * API de aplicación.
 * @type {Object}
 */
const realtime = {

  /**
   * Estado interno de aplicación, no de instancia de usuario.
   * @type {Object}
   */
  _status: {
    initialized: false
  },

  /**
   * Versión de aplicación.
   * @type {String}
   */
  version: '1.1.0',

  /**
   * Iniciar instancia de aplicación con los datos de conexión de usuario.
   * @param {Object} newSettings
   */
  start (newSettings) {

    if (realtime._status.initialized) {
      throw new Error('Realtime is already initialized.');
    }

    realtime._configure(newSettings);
    render();
    ws.connect();

    realtime._status.initialized = true;
  },

  /**
   * Configurar aplicación.
   * @param {Object} newSettings
   */
  _configure (newSettings) {

    if (typeof newSettings !== 'object') {
      throw new Error('Settings must be an object.');
    }

    if (typeof newSettings.server !== 'string' || !(/^https?:\/\//).test(newSettings.server)) {
      throw new Error('Property "server" must be an string URL.');
    }

    if (typeof newSettings.token !== 'string' || !newSettings.token) {
      throw new Error('Property "token" must be an string with value.');
    }

    if (typeof newSettings.userId !== 'string' || !newSettings.userId) {
      throw new Error('Property "userId" must be an string with value.');
    }

    if (typeof newSettings.spaceCode !== 'string' || !newSettings.spaceCode) {
      throw new Error('Property "spaceCode" must be an string with value.');
    }

    const server = String(newSettings.server).replace(/\/$/, '');

    Object.assign(settings, newSettings, { server });

    // Configurar lenguaje de librería de fechas.
    moment.locale(settings.lang);

    // Definir middleware para las peticiones AJAX.
    axios.interceptors.request.use(config => {
      const isInServer = new RegExp(`^${settings.server}/api/.+`);
      if (isInServer.test(config.url)) {
        config.headers = {
          ...config.headers,
          'x-api-token': settings.token,
          'x-api-userid': settings.userId,
        };
      }
      return config;
    });
  },
};

// Debugging.
if (process.env.NODE_ENV !== 'production') {

  window.axios = axios;
  window.moment = moment;

  realtime._settings = settings;
  realtime._store = store;
  realtime._actions = actions;
  realtime._ws = ws;
}

export default realtime;
