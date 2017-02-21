import { createSelector } from 'reselect';
import { List } from 'immutable';
import moment from 'moment';
import S from 'string';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

export default createSelector(
  state => state.spaceRooms,
  state => state.roomsMessages,
  (spaceRooms, roomsMessages) => {

    roomsMessages = List.isList(roomsMessages) ?
      roomsMessages.toJS() :
      roomsMessages;

    return spaceRooms.map(room => {

      const roomId = room.id;

      let roomMsgs = roomsMessages.
        filter(rmsg => rmsg.room === roomId).
        map(rmsg => (
          { ...rmsg, createdAt: moment(rmsg.createdAt).toDate().getTime() }
        ));

      roomMsgs = sortBy(roomMsgs, item => item.createdAt);

      let groups = groupBy(roomMsgs, roomMsg =>
        moment(roomMsg.createdAt).local().format('YYYY-MM-DD')
      );

      groups = map(groups, (group, datetime) => ({
        datetime,
        title: S(moment(datetime).format('MMMM D')).capitalize().s,
        messages: sortBy(group, item => item.createdAt)
      }));

      return {
        id: roomId,
        messages: roomMsgs,
        groups
      };
    });
  }
);
