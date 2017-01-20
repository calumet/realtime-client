// TODO: Use roomId
//const { roomId } = this.props.params;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'src/actions';
import Main from 'src/components/Main';
import AsideContainer from 'src/containers/Aside';
import ContentContainer from 'src/containers/Content';

const mapStateToProps = function (state) {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleStart: () => dispatch(actions.app.start())
  };
};

class AppContainer extends Component {

  constructor () {
    super(...arguments);
  }

  componentDidMount () {
    this.props.handleStart();
  }

  render () {

    const { app } = this.props;
    const started = app.get('started');
    const fatal = app.get('fatal');

    if (fatal) {
      return (
        <h1 style={{color: 'red'}}>Fatal error</h1>
      );
    }

    if (!started) {
      return (
        <h1>Loading...</h1>
      );
    }

    return (
      <Main>
        <AsideContainer />
        <ContentContainer />
      </Main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
