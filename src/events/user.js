import { ACTIONS } from 'src/consts';
import store from 'src/store';

export default {

  onConnect () {
    store.dispatch({
      type: ACTIONS.APP_CONNECT,
      payload: true,
    });
  },

  onDisconnect () {
    store.dispatch({
      type: ACTIONS.APP_CONNECT,
      payload: false,
    });
  },

  onError (error) {
    const message = error && error.message ? error.message : error;
    store.dispatch({
      type: ACTIONS.APP_ERROR,
      payload: { message }
    });
  },
};
