import orderBy from 'lodash/orderBy';
import settings from 'src/settings';

export function selectUser ({ users, usersCategories }, userId) {

  const user = (users || []).find(usr => usr.id === userId) || {};
  const { id, photo } = user;

  const name = (user.firstName ? user.firstName : '') +
    (user.lastName ? ' ' + user.lastName : '') || void 0;

  let category = (usersCategories || []).find(cat => cat.id === user.category);
  category = category ? category.name : void 0;

  return {
    id,
    photo,
    name,
    category,
  };
}

export function selectUserRoom ({ roomsUsers, connections }, userId, roomId) {

  const roomUser = (roomsUsers || []).find(ru => ru.room === roomId && ru.user === userId) || {};
  const { moderator, inactive } = roomUser;

  const online = !!(connections || []).find(con => con.room === roomId && con.user === userId);

  return {
    moderator,
    inactive,
    online,
  };
}

export function selectRoomUsers ({ users, usersCategories, roomsUsers, connections }, roomId) {

  users = users.toJS();
  usersCategories = usersCategories.toJS();
  roomsUsers = roomsUsers.toJS();
  connections = connections.toJS();

  const { userId } = settings;

  let usersList = roomsUsers.
    filter(roomUser => roomUser.room === roomId).
    filter(roomUser => roomUser.user !== userId).
    map(roomUser => {
      const user = selectUser({ users, usersCategories }, roomUser.user);
      const userRoom = selectUserRoom({ roomsUsers, connections }, roomUser.user, roomId);
      return { ...user, ...userRoom };
    });

  usersList = orderBy(usersList, ['inactive', 'moderator', 'online'], ['asc', 'desc', 'desc']);

  return usersList;
}
