import axios from 'axios';
import settings from 'src/settings';

export function getUsersCategories () {
  return axios.get('/api/users-categories', {
    baseURL: settings.server,
  });
}
