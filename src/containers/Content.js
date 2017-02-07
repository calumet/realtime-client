import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

import consts from 'src/consts';
import roomsActions from 'src/actions/rooms';
import i18n from 'src/i18n';

import Content from 'src/components/Content';
import Header from 'src/components/Header';
import Room from 'src/components/Room';
import RoomGroup from 'src/components/RoomGroup';
import RoomMessages from 'src/components/RoomMessages';
import Message from 'src/components/Message';
import RoomType from 'src/components/RoomType';

const mapStateToProps = function (state) {
  return {
    space: state.space.toJS(),
    users: state.users.toJS(),
    spaceRooms: state.spaceRooms.toJS(),
    roomsMessages: state.roomsMessages.toJS(),
    roomsUsers: state.roomsUsers.toJS(),
  };
};

class ContentContainer extends Component {

  constructor () {
    super(...arguments);
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

    const { roomId } = this.props.params;
    const title = this.props.space.name;
    const spaceRooms = this.props.spaceRooms;
    const room = spaceRooms.find(sroom => sroom.id === roomId);
    const subtitle = room ? room.name : <i>{i18n.t('room.select')}</i>;

    // TODO: set proper onMenuToggle.

    return (
      <Header
        title={title}
        subtitle={subtitle}
        onMenuToggle={null}
      />
    );
  }

  createRoom () {

    const { roomsMessages } = this.props;
    const { roomId } = this.props.params;

    const onSend = (params) => {
      roomsActions.message({
        room: roomId,
        content: params.message
      });
    };

    let groupsEls;
    if (roomId) {

      const roomMsgs = roomsMessages.
        filter(rmsg => rmsg.room === roomId).
        map(rmsg => {
          return Object.assign(rmsg, {
            createdAt: moment(rmsg.createdAt).local().format()
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
    const { roomId } = this.props.params;

    const user = users.find(u => u.id === userId) || {};
    const roomUser = roomsUsers.
      find(ruser => ruser.user === userId && ruser.room === roomId) || {};
    const name = `${user.firstName} ${user.lastName}`;
    const { moderator } = roomUser;
    const { id, photo } = user;

    return { id, name, photo, moderator };
  }
}

export default withRouter(connect(mapStateToProps)(ContentContainer));
