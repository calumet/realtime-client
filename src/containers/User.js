import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from 'src/settings';
import { selectUser } from 'src/selectors';
import User from 'src/components/User';
import UserCurrent from 'src/components/UserCurrent';

const mapStateToProps = function (state) {
  return {
    users: state.users,
    usersCategories: state.usersCategories,
  };
};

class UserContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { users, usersCategories } = this.props;
    const { userId } = settings;
    const user = selectUser({ users, usersCategories }, userId);
    const userProps = { ...user, theme: 'inverse' };

    return (
      <UserCurrent>
        <User {...userProps} />
      </UserCurrent>
    );
  }
}

export default connect(mapStateToProps)(UserContainer);
