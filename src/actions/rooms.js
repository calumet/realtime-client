import { ACTIONS } from 'src/consts';
import store from 'src/store';
import roomsEmitters from 'src/emitters/rooms';

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
