import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import RoomsList from 'src/components/RoomsList';
import RoomsListItem from 'src/components/RoomsListItem';

const mapStateToProps = function (state) {
  return {
    spaceRooms: state.spaceRooms,
  };
};

class RoomsContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { spaceRooms } = this.props;
    const { roomId } = this.props.params;

    const list = spaceRooms.toArray().map(room => {
      const active = room.id === roomId;
      return (
        <Link key={room.id} to={`/sala/${room.id}`}>
          <RoomsListItem active={active}>
            {room.name}
          </RoomsListItem>
        </Link>
      );
    });

    return (
      <RoomsList>{list}</RoomsList>
    );
  }
}

export default withRouter(connect(mapStateToProps)(RoomsContainer));
