import { Map } from 'immutable';
import { ACTIONS } from 'consts';

const getInitialState = function () {
  return Map({
    starting: false,
    started: false,
    fatal: null,
  });
};

const reducer = function (state, action) {

  if (!state) {
    return getInitialState();
  }

  switch (action.type) {

    case ACTIONS.APP.START: {
      return state.merge({ starting: true, started: false, fatal: null });
    }

    case ACTIONS.APP.STARTED: {
      return state.merge({ starting: false, started: true, fatal: null });
    }

    case ACTIONS.APP.FATAL: {
      const fatal = action.payload;
      return state.
        set('starting', false).
        set('started', false).
        set('fatal', fatal);
    }

    default:
      return state;
  }
};

export default reducer;
