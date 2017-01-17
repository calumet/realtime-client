// TODO: Use roomId
//const { roomId } = this.props.params;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from 'src/components/Main';
import Aside from 'src/containers/Aside';
import Content from 'src/containers/Content';

const mapStateToProps = function (state) {
  return {
    app: state.app,
  };
};

class App extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { app } = this.props;
    const started = app.get('started');

    if (!started) {
      return null;
    }

    return (
      <Main>
        <Aside />
        <Content />
      </Main>
    );
  }
}

export default connect(mapStateToProps)(App);
