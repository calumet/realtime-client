// TODO: Use roomId
//const { roomId } = this.props.params;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from 'src/components/Main';
import AsideContainer from 'src/containers/Aside';
import ContentContainer from 'src/containers/Content';

const mapStateToProps = function (state) {
  return {
    app: state.app,
  };
};

class AppContainer extends Component {

  constructor () {
    super(...arguments);
  }

  render () {

    const { app } = this.props;
    const started = app.get('started');

    if (!started) {
      return <h1>Loading..</h1>;
    }

    return (
      <Main>
        <AsideContainer />
        <ContentContainer />
      </Main>
    );
  }
}

export default connect(mapStateToProps)(AppContainer);
