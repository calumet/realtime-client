import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapProps from './map-props';
import Main from 'src/components/Main';
import Aside from 'src/containers/Aside';
import Content from 'src/containers/Content';

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
        <h1>Loading application...</h1>
      );
    }

    return (
      <Main>
        <Aside />
        <Content />
      </Main>
    );
  }

  handleMenuToggle () {
    // TODO:
    // DEBUG:
    console.log('App handleMenuToggle');
  }
}

export default connect(mapProps)(App);
