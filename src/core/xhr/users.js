import axios from 'axios';
import settings from 'settings';

export function getUsersCategories () {
  return axios.get('/api/users-categories', {
    baseURL: settings.server,
  });
}
