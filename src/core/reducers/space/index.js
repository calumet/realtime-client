import { Map } from 'immutable';
import { ACTIONS } from 'consts';

const getInitialState = function () {
  return Map();
};

const reducer = function (state, action) {

  if (!state) {
    return getInitialState();
  }

  switch (action.type) {

    case ACTIONS.SPACE_UPDATE: {
      return state.merge(action.payload);
    }

    default:
      return state;
  }
};

export default reducer;
