import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapProps from './map-props';
import mapDispaches from './map-dispaches';

import Main from 'components/base/Main';
import Aside from 'containers/Aside';
import Content from 'containers/Content';

class App extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  render () {

    const { handleMessage } = this.props;
    const { started } = this.props.app;

    // TODO: Use roomId
    //const { roomId } = this.props.params;

    if (!started) {
      return (
        <h1>Loading application...</h1>
      );
    }

    return (
      <Main>
        <Aside
          handleMenuToggle={this.handleMenuToggle}
        />
        <Content
          handleMenuToggle={this.handleMenuToggle}
          handleMessage={handleMessage}
        />
      </Main>
    );
  }

  handleMenuToggle () {
    // TODO:
    // DEBUG:
    console.log('App handleMenuToggle');
  }
}

export default connect(mapProps, mapDispaches)(App);
