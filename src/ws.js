import settings from 'src/settings';
import userEvents from 'src/events/user';
import usersEvents from 'src/events/users';
import roomsEvents from 'src/events/rooms';

const ws = {

  connect () {
    const query = {
      userId: settings.userId,
      spaceCode: settings.spaceCode,
    };
    if (settings.roomTag) {
      query.roomTag = settings.roomTag;
    }
    settings.socket = io(settings.server, { query });
    this.setEvents();
  },

  setEvents () {

    // User
    settings.socket.on('error', userEvents.onError.bind(settings.socket));

    // Users
    settings.socket.on('room:user:connect', usersEvents.onConnect.bind(settings.socket));
    settings.socket.on('room:user:disconnect', usersEvents.onDisconnect.bind(settings.socket));

    // Rooms
    settings.socket.on('room:message', roomsEvents.onMessage.bind(settings.socket));
  },
};

export default ws;
