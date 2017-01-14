import React, {Component} from 'react';
import {connect} from 'react-redux';
import orderBy from 'lodash/orderBy';
import settings from 'src/settings';
import roomActions from 'src/actions/rooms';
import Aside from 'src/components/Aside';
import User from 'src/components/User';
import UserCurrent from 'src/components/UserCurrent';
import UsersList from 'src/components/UsersList';
import RoomsList from 'src/components/RoomsList';
import RoomsListItem from 'src/components/RoomsListItem';
import mapProps from './map-props';

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

    const currentRoom = this.props.app.room;
    const rooms = this.props.spaceRooms;

    const list = rooms.map(room => {
      const onClick = () => roomActions.change(room.id);
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

export default connect(mapProps)(AsideContainer);
