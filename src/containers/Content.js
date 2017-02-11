import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from 'src/containers/Header';
import RoomContainer from 'src/containers/Room';
import Content from 'src/components/Content';

class ContentContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {
    return (
      <Content>
        <HeaderContainer />
        <RoomContainer />
      </Content>
    );
  }
}

export default connect()(ContentContainer);
