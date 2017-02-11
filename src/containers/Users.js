import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import settings from 'src/settings';
import selectUsers from 'src/selectors/users';
import selectRoomsUsers from 'src/selectors/rooms-users';
import User from 'src/components/User';
import UsersList from 'src/components/UsersList';

const mapStateToProps = function (state) {
  return {
    users: selectUsers(state),
    roomsUsers: selectRoomsUsers(state)
  };
};

class UsersContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users, roomsUsers, params } = this.props;
    const { roomId } = params;
    const roomUsers = roomsUsers.find(ru => ru.id === roomId);
    const { userId } = settings;

    if (!roomUsers) return null;

    const usersEls = roomUsers.users.
      filter(ru => ru.id !== userId).
      map(ru => {
        const user = users.find(usr => usr.id === ru.id);
        return { ...user, ...ru };
      }).
      map(user => {
        return <User key={user.id} {...user} />;
      });

    return usersEls.length ? <UsersList>{usersEls}</UsersList> : null;
  }
}

export default withRouter(connect(mapStateToProps)(UsersContainer));
