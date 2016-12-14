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

    case ACTIONS.CON.ADD: {
      const item = action.payload;
      return state.push(item);
    }

    case ACTIONS.CON.REMOVE: {
      const id = action.payload;
      const key = state.findKey(item => item.id === id);
      return state.remove(key);
    }

    case ACTIONS.CON.RESET: {
      const items = action.payload;
      return List(items);
    }

    default:
      return state;
  }
};

export default reducer;
