import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

import consts         from 'consts';
import i18n           from 'core/i18n';
import mapProps       from './map-props';
import mapDispatches  from './map-dispatches';
import Content        from 'components/base/Content';
import Header         from 'components/base/Header';
import Room           from 'components/rooms/Room';
import RoomGroup      from 'components/rooms/RoomGroup';
import RoomMessages   from 'components/rooms/RoomMessages';
import Message        from 'components/rooms/Message';
import RoomType       from 'components/rooms/RoomType';

class ContentContainer extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  render () {

    const header = this.createHeader();
    const room = this.createRoom();

    return (
      <Content>
        {header}
        {room}
      </Content>
    );
  }

  createHeader () {

    const { handleMenuToggle } = this.props;

    const title = this.props.space.name;

    const roomId = this.props.app.room;
    const spaceRooms = this.props.spaceRooms;
    const room = spaceRooms.find(sroom => sroom.id === roomId);
    const subtitle = room ? room.name : <i>{i18n.t('room.select')}</i>;

    return (
      <Header
        title={title}
        subtitle={subtitle}
        onMenuToggle={handleMenuToggle}
      />
    );
  }

  createRoom () {

    const { handleMessage, roomsMessages } = this.props;
    const roomId = this.props.app.room;

    const onSend = (params) => {
      handleMessage({
        room: roomId,
        content: params.message
      });
    };

    let groupsEls;
    if (roomId) {

      const gmt = this.getGMT();
      const roomMsgs = roomsMessages.
        filter(rmsg => rmsg.room === roomId).
        map(rmsg => {
          return Object.assign(rmsg, {
            createdAt: moment(rmsg.createdAt).utcOffset(gmt).format()
          });
        });

      let groups = groupBy(roomMsgs, roomMsg => moment(roomMsg.createdAt).format('YYYY-MM-DD'));
      groups = map(groups, (group, date) => {
        return {
          header: moment(date).format('MMMM D'),
          messages: sortBy(group, item => moment(item.createdAt).toDate().getTime())
        };
      });

      groupsEls = [];

      groups.forEach((group, index) => {

        const messages = group.messages.map(msg => {
          const user = this.getUserData(msg.user);
          const timestamp = msg.createdAt;
          return (
            <Message key={msg.id} {...user} timestamp={timestamp}>
              {msg.content}
            </Message>
          );
        });

        groupsEls.push(
          <RoomGroup key={index} header={group.header}>
            <RoomMessages>
              {messages}
            </RoomMessages>
          </RoomGroup>
        );
      });
    }

    return (
      <Room>
        {groupsEls}
        { roomId ? <RoomType onSend={onSend} /> : null }
      </Room>
    );
  }

  getUserData (userId) {

    const { users, roomsUsers } = this.props;
    const roomId = this.props.app.room;

    const user = users.find(u => u.id === userId) || {};
    const roomUser = roomsUsers.
      find(ruser => ruser.user === userId && ruser.room === roomId) || {};
    const name = `${user.firstName} ${user.lastName}`;
    const { moderator } = roomUser;
    const { id, photo } = user;

    return { id, name, photo, moderator };
  }

  getGMT () {
    return consts.GMT;
  }
}

export default connect(mapProps, mapDispatches)(ContentContainer);
