import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18n from 'src/i18n';
import actions from 'src/actions';
import AsideContainer from 'src/containers/Aside';
import ContentContainer from 'src/containers/Content';
import Main from 'src/components/Main';
import Loader from 'src/components/Loader';
import ScreenMessage from 'src/components/ScreenMessage';

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
      const fatalError = i18n.t('fatal.server');
      return (
        <ScreenMessage type='error'>{fatalError}</ScreenMessage>
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
