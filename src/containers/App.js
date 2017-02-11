import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'src/actions';
import AsideContainer from 'src/containers/Aside';
import ContentContainer from 'src/containers/Content';
import Main from 'src/components/Main';
import Loader from 'src/components/Loader';

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
    const fatal = app.get('fatal');
    const started = app.get('started');

    if (fatal) {
      return (
        <h1 style={{color: 'red'}}>Fatal error</h1>
      );
    }

    if (!started) {
      return <Loader />;
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
