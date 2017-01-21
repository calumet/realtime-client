import { ACTIONS } from 'src/consts';
import roomsEmitters from 'src/emitters/rooms';

export default {

  message ({ room, content }) {
    roomsEmitters.emitMessage({ room, content });
  },
};
