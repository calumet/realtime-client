import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectRoomUsers } from 'src/selectors';
import User from 'src/components/User';
import UsersList from 'src/components/UsersList';

const mapStateToProps = function (state) {
  return {
    users: state.users,
    usersCategories: state.usersCategories,
    roomsUsers: state.roomsUsers,
    connections: state.connections,
  };
};

class UsersContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users, usersCategories, roomsUsers, connections, params } = this.props;
    const { roomId } = params;
    const currentRoomUsers = selectRoomUsers({
      users,
      usersCategories,
      roomsUsers,
      connections,
    }, roomId);

    const usersEls = currentRoomUsers.map(user => {
      return <User key={user.id} {...user} />;
    });

    return usersEls.length ? <UsersList>{usersEls}</UsersList> : null;
  }
}

export default withRouter(connect(mapStateToProps)(UsersContainer));
