import { Map } from 'immutable';
import { ACTIONS } from 'src/consts';

const initial = Map({
  starting: false,
  started: false,
  error: null,
  fatal: null,
});

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.APP_START: {
      return state.merge({ starting: true, started: false, fatal: null });
    }

    case ACTIONS.APP_STARTED: {
      return state.merge({ starting: false, started: true, fatal: null });
    }

    case ACTIONS.APP_ERROR: {
      const error = action.payload;
      return state.set('error', error);
    }

    case ACTIONS.APP_FATAL: {
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
