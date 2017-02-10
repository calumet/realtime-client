import { createSelector } from 'reselect';

function mapUser (users, usersCategories, userId) {

  const user = (users || []).find(usr => usr.id === userId);

  if (!user) return {};

  const { id, photo } = user;
  const name = (
    (user.firstName ? user.firstName : '') +
    (user.lastName ? ' ' + user.lastName : '')
  ).trim() || void 0;

  let category = (usersCategories || []).find(cat => cat.id === user.category);
  category = category ? category.name : void 0;

  return {
    id,
    photo,
    name,
    category
  };
}

export default createSelector(
  state => state.users,
  state => state.usersCategories,
  (users, usersCategories) => (
    users.map(user => mapUser(users, usersCategories, user.id))
  )
);
