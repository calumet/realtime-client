import React, { Component } from 'react';
import Content from 'components/base/Content';

import Room from 'components/rooms/Room';
import RoomGroup from 'components/rooms/RoomGroup';
import RoomMessages from 'components/rooms/RoomMessages';
import Message from 'components/rooms/Message';
import RoomType from 'components/rooms/RoomType';

export default class ContentContainer extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  render () {
    return (
      <Content></Content>
    );
  }
}
