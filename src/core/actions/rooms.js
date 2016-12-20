import { ACTIONS } from 'consts';
import store from 'core/store';
import roomsEmitters from 'core/emitters/rooms';

export default {

  change (roomId) {
    store.dispatch({
      type: ACTIONS.APP_CHANGEROOM,
      payload: roomId
    });
  },

  message ({ room, content }) {
    roomsEmitters.emitMessage({ room, content });
  },
};
