import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCurrentRoomUsers } from 'src/selectors';
import User from 'src/components/User';
import UsersList from 'src/components/UsersList';

const mapStateToProps = function (state) {
  return {
    currentRoomUsers: selectCurrentRoomUsers(state)
  };
};

class UsersContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { currentRoomUsers } = this.props;
    const usersEls = currentRoomUsers.map(user => {
      return <User key={user.id} {...user} />;
    });

    return usersEls.length ? <UsersList>{usersEls}</UsersList> : null;
  }
}

export default connect(mapStateToProps)(UsersContainer);
