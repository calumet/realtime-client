import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app              from './app';
import users            from './users';
import usersCategories  from './users-categories';
import space            from './space';
import spaceRooms       from './space-rooms';
import roomsUsers       from './rooms-users';
import roomsMessages    from './rooms-messages';
import connections      from './connections';

export default combineReducers({
  app,
  users,
  usersCategories,
  space,
  spaceRooms,
  roomsUsers,
  roomsMessages,
  connections,
  routing: routerReducer,
});
