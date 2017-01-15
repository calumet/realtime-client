import { Map } from 'immutable';
import { ACTIONS } from 'src/consts';

const initial = Map();

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.SPACE_UPDATE: {
      return state.merge(action.payload);
    }

    default:
      return state;
  }
};

export default reducer;
