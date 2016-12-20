import settings from 'settings';

export default {

  emitMessage ({ room, content }) {
    settings.socket.emit('room:message', { room, content });
  },
};
