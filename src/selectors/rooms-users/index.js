import { createSelector } from 'reselect';
import { List } from 'immutable';
import orderBy from 'lodash/orderBy';

export default createSelector(
  state => state.spaceRooms,
  state => state.roomsUsers,
  state => state.connections,
  (spaceRooms, roomsUsers, connections) => {
    return spaceRooms.map(room => {

      roomsUsers = List.isList(roomsUsers) ? roomsUsers.toJS() : roomsUsers;

      const roomId = room.id;

      let usersList = roomsUsers.
        filter(roomUser => roomUser.room === roomId).
        map(roomUser => {

          const userId = roomUser.user;
          const { moderator, inactive } = roomUser;
          const online = !!(connections || []).
            find(con => con.room === roomId && con.user === userId);

          return {
            id: userId,
            moderator,
            inactive,
            online
          };
        });

      usersList = orderBy(usersList, ['inactive', 'moderator', 'online'], ['asc', 'desc', 'desc']);

      return {
        id: roomId,
        users: usersList
      };
    });
  }
);
