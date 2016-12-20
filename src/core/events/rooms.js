import { ACTIONS } from 'consts';
import store from 'core/store';

export default {

  onMessage (details) {
    store.dispatch({
      type: ACTIONS.ROOMSMSGS_ADD,
      payload: details
    });
  },
};
