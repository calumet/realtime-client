import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from 'src/selectors';
import User from 'src/components/User';
import UserCurrent from 'src/components/UserCurrent';

const mapStateToProps = function (state) {
  return {
    user: selectCurrentUser(state)
  };
};

class UserContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { user } = this.props;
    const userProps = { ...user, theme: 'inverse' };

    return (
      <UserCurrent>
        <User {...userProps} />
      </UserCurrent>
    );
  }
}

export default connect(mapStateToProps)(UserContainer);
