export default function (state) {
  return {
    app: state.app.toObject(),
    users: state.users.toArray(),
    usersCategories: state.usersCategories.toArray(),
    spaceRooms: state.spaceRooms.toArray(),
    roomsUsers: state.roomsUsers.toArray(),
    connections: state.connections.toArray(),
  };
}
