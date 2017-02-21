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

  onError () {
    console.log('socket event error', arguments);
  },
};
