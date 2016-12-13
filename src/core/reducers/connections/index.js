import { Map } from 'immutable';
import { ACTIONS } from 'consts';

const getInitialState = function () {
  return Map();
};

const reducers = function (state, action) {

  if (!state) {
    return getInitialState();
  }

  switch (action.type) {

    case ACTIONS.CON.ADD: {
      const { id } = action.payload;
      const item = action.payload;
      return state.set(id, item);
    }

    case ACTIONS.CON.REMOVE: {
      const { id } = action.payload;
      return state.remove(id);
    }

    case ACTIONS.CON.RESET: {
      const { payload } = action;
      const items = {};
      payload.forEach(item => (items[item.id] = item));
      return Map(items);
    }

    default:
      return state;
  }
};

export default reducers;
