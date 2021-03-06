import axios from 'axios';
import settings from 'src/settings';

export function getRealtime () {
  return axios.get('/api/realtime', {
    baseURL: settings.server,
    params: {
      userId: settings.userId,
      spaceCode: settings.spaceCode,
      roomTag: settings.roomTag,
    }
  });
}
