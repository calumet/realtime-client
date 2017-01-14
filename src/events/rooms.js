import { ACTIONS } from 'src/consts';
import store from 'src/store';

export default {

  onMessage (details) {
    store.dispatch({
      type: ACTIONS.ROOMSMSGS_ADD,
      payload: details
    });
  },
};
