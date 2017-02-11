import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import selectUsers from 'src/selectors/users';
import selectRoomsUsers from 'src/selectors/rooms-users';
import selectRoomsMessages from 'src/selectors/rooms-messages';
import roomsActions from 'src/actions/rooms';
import Room from 'src/components/Room';
import RoomGroup from 'src/components/RoomGroup';
import RoomMessages from 'src/components/RoomMessages';
import Message from 'src/components/Message';
import RoomType from 'src/components/RoomType';

const mapStateToProps = function (state) {
  return {
    users: selectUsers(state),
    roomsUsers: selectRoomsUsers(state),
    roomsMessages: selectRoomsMessages(state),
  };
};

class RoomContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { params, users, roomsUsers, roomsMessages } = this.props;
    const { roomId } = params;

    const onSend = (details) => {
      roomsActions.message({
        room: roomId,
        content: details.message
      });
    };

    let groupsEls;
    if (roomId) {

      const roomMessages = roomsMessages.find(rm => rm.id === roomId);

      if (!roomMessages) return null;

      const { groups } = roomMessages;

      groupsEls = [];

      groups.forEach((group, index) => {

        const messages = group.messages.map(msg => {

          const roomUser = roomsUsers.
            find(ru => ru.id === roomId).
            users.
            find(usr => usr.id === msg.user);
          const userData = users.find(usr => usr.id === msg.user);
          const user = { ...roomUser, ...userData };
          const timestamp = msg.createdAt;

          return (
            <Message key={msg.id} {...user} timestamp={timestamp}>
              {msg.content}
            </Message>
          );
        });

        groupsEls.push(
          <RoomGroup key={index} header={group.title}>
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
}

export default withRouter(connect(mapStateToProps)(RoomContainer));
