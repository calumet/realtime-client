export default function (state) {
  return {
    app: state.app.toObject(),
    space: state.space.toObject(),
    users: state.users.toArray(),
    spaceRooms: state.spaceRooms.toArray(),
    roomsMessages: state.roomsMessages.toArray(),
    roomsUsers: state.roomsUsers.toArray(),
  };
}
