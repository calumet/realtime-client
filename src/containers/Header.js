import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import i18n from 'src/i18n';
import Header from 'src/components/Header';

const mapStateToProps = function (state) {
  return {
    space: state.space,
    spaceRooms: state.spaceRooms,
  };
};

class HeaderContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { params, space, spaceRooms } = this.props;
    const { roomId } = params;
    const title = space.get('name');
    const room = spaceRooms.find(sroom => sroom.id === roomId);
    const subtitle = room ? room.name : <i>{i18n.t('room.select')}</i>;

    return (
      <Header
        title={title}
        subtitle={subtitle}
        onMenuToggle={null}
      />
    );
  }
}

export default withRouter(connect(mapStateToProps)(HeaderContainer));
