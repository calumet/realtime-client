import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'src/actions';
import RoomsList from 'src/components/RoomsList';
import RoomsListItem from 'src/components/RoomsListItem';

const mapStateToProps = function (state) {
  return {
    app: state.app,
    spaceRooms: state.spaceRooms,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleChangeRoom: (roomId) => dispatch(actions.rooms.change(roomId))
  };
};

class RoomsContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { spaceRooms, handleChangeRoom } = this.props;
    const { roomId } = this.props.app;

    const list = spaceRooms.toArray().map(room => {

      const onClick = () => handleChangeRoom(room.id);
      const active = room.id === roomId;

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
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);
