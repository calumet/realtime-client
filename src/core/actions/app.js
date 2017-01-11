import axios from 'axios';
import { ACTIONS } from 'consts';
import store from 'core/store';
import { getRealtime } from 'core/xhr/realtime';
import { getUsersCategories } from 'core/xhr/users';

export default {

  start () {

    store.dispatch({ type: ACTIONS.APP_START });

    axios.
      all([getRealtime(), getUsersCategories()]).
      then(axios.spread((realtimeRes, userCategoriesRes) => {

        const { users, space, rooms, roomsUsers, roomsMessages, connections } = realtimeRes.data;
        const userCategories = userCategoriesRes.data;
        const currentRoomId = rooms && rooms.length ? rooms[0].id : null;

        store.dispatch({
          type: ACTIONS.USERS_RESET,
          payload: users
        });

        store.dispatch({
          type: ACTIONS.USERSCATEGORIES_RESET,
          payload: userCategories
        });

        store.dispatch({
          type: ACTIONS.SPACE_UPDATE,
          payload: space
        });

        store.dispatch({
          type: ACTIONS.SPACEROOMS_RESET,
          payload: rooms
        });

        store.dispatch({
          type: ACTIONS.ROOMSUSERS_RESET,
          payload: roomsUsers
        });

        store.dispatch({
          type: ACTIONS.ROOMSMSGS_MERGE,
          payload: roomsMessages
        });

        store.dispatch({
          type: ACTIONS.CON_MERGE,
          payload: connections
        });

        store.dispatch({
          type: ACTIONS.APP_CHANGEROOM,
          payload: currentRoomId
        });

        store.dispatch({
          type: ACTIONS.APP_STARTED
        });
      })).
      catch(res => {
        store.dispatch({
          type: ACTIONS.APP_FATAL,
          payload: res.data
        });
      });
  },
};
