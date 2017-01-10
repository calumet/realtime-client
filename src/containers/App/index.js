import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapProps from './map-props';

import Main from 'components/base/Main';
import Aside from 'containers/Aside';
import Content from 'containers/Content';

class App extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  render () {

    const { started } = this.props.app;

    // TODO: Use roomId
    //const { roomId } = this.props.params;

    if (!started) {
      return (
        <b>Loading...</b>
      );
    }

    return (
      <Main>
        <Aside />
        <Content />
      </Main>
    );
  }
}

export default connect(mapProps)(App);
