import settings from 'src/settings';

export default {

  emitMessage ({ room, content }) {
    settings.socket.emit('room:message', { room, content });
  },
};
