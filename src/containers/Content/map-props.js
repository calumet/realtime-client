export default function (state) {
  return {
    app: state.app.toJS(),
    space: state.space.toJS(),
    users: state.users.toJS(),
    spaceRooms: state.spaceRooms.toJS(),
    roomsMessages: state.roomsMessages.toJS(),
    roomsUsers: state.roomsUsers.toJS(),
  };
}
