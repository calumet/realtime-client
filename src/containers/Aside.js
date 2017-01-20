import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aside from 'src/components/Aside';
import UserContainer from 'src/containers/User';
import UsersContainer from 'src/containers/Users';
import RoomsContainer from 'src/containers/Rooms';

class AsideContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    return (
      <Aside header={<UserContainer />}>
        <RoomsContainer />
        <UsersContainer />
      </Aside>
    );
  }
}

export default connect()(AsideContainer);
