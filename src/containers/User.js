import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from 'src/settings';
import selectUsers from 'src/selectors/users';
import User from 'src/components/User';
import UserCurrent from 'src/components/UserCurrent';

const mapStateToProps = function (state) {
  return {
    users: selectUsers(state)
  };
};

class UserContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users } = this.props;
    const { userId } = settings;
    const user = users.find(usr => usr.id === userId);
    const userProps = { ...user, theme: 'inverse' };

    return (
      <UserCurrent>
        <User {...userProps} />
      </UserCurrent>
    );
  }
}

export default connect(mapStateToProps)(UserContainer);
