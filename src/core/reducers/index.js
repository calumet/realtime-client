import { combineReducers } from 'redux';
import space          from './space';
import rooms          from './rooms';
import roomsUsers     from './roomsUsers';
import roomsMessages  from './roomsMessages';
import users          from './users';
import connections    from './connections';

export default combineReducers({
  space,
  rooms,
  roomsUsers,
  roomsMessages,
  users,
  connections,
});
