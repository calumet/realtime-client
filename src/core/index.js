import settings from 'settings';
import render from 'core/render';
import ws from 'core/ws';

// TODO:
import axios from 'axios';
import { getRealtime } from 'core/xhr/realtime';
import { getUsersCategories } from 'core/xhr/users';

const realtime = {

  getInstanceConfig () {

    if (typeof window._realtime !== 'object') {
      throw new Error('Global object "_realtime" is not defined.');
    }

    if (typeof window._realtime.server !== 'string' || !(/^https?:\/\//).test(window._realtime.server)) {
      throw new Error('Property "_realtime.server" must be an string URL');
    }

    if (typeof window._realtime.userId !== 'string') {
      throw new Error('Property "_realtime.userId" must be an string');
    }

    if (typeof window._realtime.spaceCode !== 'string') {
      throw new Error('Property "_realtime.spaceCode" must be an string');
    }

    const server = String(window._realtime.server).replace(/\/$/, '');
    const userId = String(window._realtime.userId);
    const spaceCode = String(window._realtime.spaceCode);
    const roomTag = window._realtime.roomTag ? String(window._realtime.roomTag) : undefined;

    settings.server = server;
    settings.userId = userId;
    settings.spaceCode = spaceCode;
    settings.roomTag = roomTag;
  },

  start () {

    realtime.getInstanceConfig();

    render();

    ws.connect();

    // TODO:
    actions.app.start();
    axios.
      all([getRealtime(), getUsersCategories()]).
      then(axios.spread((realtimeRes, userCategoriesRes) => {
        const { users, space, rooms, roomsUsers, roomsMessages, connections } = realtimeRes.data;
        actions.usersCategories.reset(realtimeRes.data);
      }));
  },
};

export default realtime;
