import { ACTIONS } from 'src/consts';
import store from 'src/store';

export default {

  onConnect (details) {
    store.dispatch({
      type: ACTIONS.CON_ADD,
      payload: details
    });
  },

  onDisconnect (details) {
    store.dispatch({
      type: ACTIONS.CON_REMOVE,
      payload: details.id
    });
  },
};
