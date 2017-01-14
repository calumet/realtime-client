export default function (state) {
  return {
    app: state.app.toJS(),
    users: state.users.toJS(),
    usersCategories: state.usersCategories.toJS(),
    spaceRooms: state.spaceRooms.toJS(),
    roomsUsers: state.roomsUsers.toJS(),
    connections: state.connections.toJS(),
  };
}
