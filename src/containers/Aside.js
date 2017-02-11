import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'src/actions';
import Aside from 'src/components/Aside';
import UserContainer from 'src/containers/User';
import UsersContainer from 'src/containers/Users';
import RoomsContainer from 'src/containers/Rooms';

class AsideContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    const { onMenuToggle } = actions.app;
    return (
      <Aside header={<UserContainer />} onMenuToggle={onMenuToggle}>
        <RoomsContainer />
        <UsersContainer />
      </Aside>
    );
  }
}

export default connect()(AsideContainer);
