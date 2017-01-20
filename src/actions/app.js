import axios from 'axios';
import { ACTIONS } from 'src/consts';
import { getRealtime } from 'src/xhr/realtime';
import { getUsersCategories } from 'src/xhr/users';

export default {

  start () {
    return (dispatch) => {

      dispatch({ type: ACTIONS.APP_START });

      axios.
        all([getRealtime(), getUsersCategories()]).
        then(axios.spread((realtimeRes, userCategoriesRes) => {

          const {
            users,
            space,
            rooms,
            roomsUsers,
            roomsMessages,
            connections
          } = realtimeRes.data;
          const userCategories = userCategoriesRes.data;
          const currentRoomId = rooms && rooms.length ? rooms[0].id : null;

          dispatch({
            type: ACTIONS.USERS_RESET,
            payload: users
          });

          dispatch({
            type: ACTIONS.USERSCATEGORIES_RESET,
            payload: userCategories
          });

          dispatch({
            type: ACTIONS.SPACE_UPDATE,
            payload: space
          });

          dispatch({
            type: ACTIONS.SPACEROOMS_RESET,
            payload: rooms
          });

          dispatch({
            type: ACTIONS.ROOMSUSERS_RESET,
            payload: roomsUsers
          });

          dispatch({
            type: ACTIONS.ROOMSMSGS_MERGE,
            payload: roomsMessages
          });

          dispatch({
            type: ACTIONS.CON_MERGE,
            payload: connections
          });

          dispatch({
            type: ACTIONS.APP_CHANGEROOM,
            payload: currentRoomId
          });

          dispatch({
            type: ACTIONS.APP_STARTED
          });
        }),
        res => {
          dispatch({
            type: ACTIONS.APP_FATAL,
            payload: res && res.data ? res.data : res || 'Fatal error'
          });
        });
    };
  },
};
