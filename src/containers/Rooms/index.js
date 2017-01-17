import React, { Component } from 'react';
import { connect } from 'react-redux';
import roomActions from 'src/actions/rooms';
import RoomsList from 'src/components/RoomsList';
import RoomsListItem from 'src/components/RoomsListItem';

const mapStateToProps = function (state) {
  return {
    app: state.app,
    spaceRooms: state.spaceRooms,
  };
};

class RoomsContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { roomId } = this.props.app;
    const { spaceRooms } = this.props;

    const list = spaceRooms.toArray().map(room => {

      const onClick = () => roomActions.change(room.id);
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

export default connect(mapStateToProps)(RoomsContainer);
