// TODO: Structure with different containers.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';
import settings from 'settings';
import mapProps from './map-props';
import mapDispatches from './map-dispatches';

import Aside          from 'components/base/Aside';
import User           from 'components/users/User';
import UserCurrent    from 'components/users/UserCurrent';
import UsersList      from 'components/users/UsersList';
import RoomsList      from 'components/rooms/RoomsList';
import RoomsListItem  from 'components/rooms/RoomsListItem';

class AsideContainer extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  render () {

    const header = this.createHeader();
    const rooms = this.createRoomsList();
    const users = this.createUsersList();

    return (
      <Aside header={header}>
        {rooms}
        {users}
      </Aside>
    );
  }

  createHeader () {

    const { userId } = settings;
    const users = this.props.users;
    const categories = this.props.usersCategories;
    const user = users.find(usr => usr.id === userId);

    const userMap = {
      name: `${user.firstName} ${user.lastName}`,
      category: categories.find(category => category.id === user.category).name,
      photo: user.photo,
      moderator: user.moderator,
      theme: 'inverse'
    };

    return (
      <UserCurrent>
        <User {...userMap} />
      </UserCurrent>
    );
  }

  createRoomsList () {

    const { handleChangeRoom } = this.props;
    const currentRoom = this.props.app.room;
    const rooms = this.props.spaceRooms;

    const list = rooms.map(room => {
      const onClick = () => handleChangeRoom(room.id);
      const active = room.id === currentRoom;
      return (
        <RoomsListItem
          key={room.id}
          onClick={onClick}
          active={active}
        >
          {room.name}
        </RoomsListItem>
      );
    });

    return <RoomsList>{list}</RoomsList>;
  }

  createUsersList () {

    const { userId } = settings;
    const { app, users, usersCategories, roomsUsers, connections } = this.props;
    const currentRoom = app.room;

    let usersList = roomsUsers.
      filter(roomUser => roomUser.room === currentRoom).
      filter(roomUser => roomUser.user !== userId).
      map(roomUser => {

        const user = users.find(u => u.id === roomUser.user);
        const { moderator } = roomUser;
        const { id, photo } = user;

        const name = `${user.firstName} ${user.lastName}`;

        const online = !!connections.
          find(con => con.room === currentRoom && con.user === user.id);

        const category = usersCategories.
          find(ucategory => ucategory.id === user.category).
          name;

        return { id, name, category, photo, moderator, online };
      });

    usersList = orderBy(usersList, ['moderator', 'online'], ['desc', 'desc']);

    const usersEls = usersList.map(user => {
      return <User key={user.id} {...user} />;
    });

    return usersEls.length ?
      <UsersList>
        {usersEls}
      </UsersList> :
      null;
  }
}

export default connect(mapProps, mapDispatches)(AsideContainer);
