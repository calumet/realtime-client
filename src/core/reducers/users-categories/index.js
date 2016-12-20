import { List } from 'immutable';
import { ACTIONS } from 'consts';

const getInitialState = function () {
  return List();
};

const reducer = function (state, action) {

  if (!state) {
    return getInitialState();
  }

  switch (action.type) {

    case ACTIONS.USERSCATEGORIES_RESET: {
      const items = action.payload;
      return List(items);
    }

    default:
      return state;
  }
};

export default reducer;
