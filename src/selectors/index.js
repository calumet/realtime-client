import { createSelector } from 'reselect';
import orderBy from 'lodash/orderBy';
import settings from 'src/settings';

function mapUser ({ users, usersCategories, userId }) {

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

function mapUserRoom ({ roomsUsers, connections, userId, roomId }) {

  const roomUser = (roomsUsers || []).find(ru => ru.room === roomId && ru.user === userId) || {};
  const { moderator, inactive } = roomUser;

  const online = !!(connections || []).find(con => con.room === roomId && con.user === userId);

  return {
    moderator,
    inactive,
    online,
  };
}

export const selectCurrentUser = createSelector(
  () => settings.userId,
  (state) => state.users,
  (state) => state.usersCategories,
  (userId, users, usersCategories) => mapUser({ userId, users, usersCategories })
);

export const selectCurrentRoomUsers = createSelector(
  (state) => state.app,
  (state) => state.users,
  (state) => state.usersCategories,
  (state) => state.roomsUsers,
  (state) => state.connections,
  (app, users, usersCategories, roomsUsers, connections) => {

    app = app.toJS();
    users = users.toJS();
    usersCategories = usersCategories.toJS();
    roomsUsers = roomsUsers.toJS();
    connections = connections.toJS();

    const { userId } = settings;
    const { roomId } = app;

    let usersList = roomsUsers.
      filter(roomUser => roomUser.room === roomId).
      filter(roomUser => roomUser.user !== userId).
      map(roomUser => {
        const user = mapUser({
          users,
          usersCategories,
          userId: roomUser.user
        });
        const userRoom = mapUserRoom({
          roomsUsers,
          connections,
          roomId,
          userId: roomUser.user
        });
        return { ...user, ...userRoom };
      });

    usersList = orderBy(usersList, ['inactive', 'moderator', 'online'], ['asc', 'desc', 'desc']);

    return usersList;
  }
);
