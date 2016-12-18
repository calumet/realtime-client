import settings from 'settings';
import usersEvents from 'core/events/users';
import roomsEvents from 'core/events/rooms';

const ws = {

  socket: null,

  connect () {
    const query = {
      userId: settings.userId,
      spaceCode: settings.spaceCode,
      roomTag: settings.roomTag,
    };
    ws.socket = io(settings.server, { query });
    ws.setEvents();
  },

  setEvents () {
    ws.socket.on('room:user:connect', usersEvents.connect.bind(ws.socket));
    ws.socket.on('room:user:disconnect', usersEvents.disconnect.bind(ws.socket));
    ws.socket.on('room:message', roomsEvents.message.bind(ws.socket));
  },
};

export default ws;
