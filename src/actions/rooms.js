import { ACTIONS } from 'src/consts';
import roomsEmitters from 'src/emitters/rooms';

export default {

  change (roomId) {
    return {
      type: ACTIONS.APP_CHANGEROOM,
      payload: roomId
    };
  },

  message ({ room, content }) {
    roomsEmitters.emitMessage({ room, content });
  },
};
