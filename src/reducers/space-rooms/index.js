import { List } from 'immutable';
import { ACTIONS } from 'src/consts';

const initial = List();

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.SPACEROOMS_RESET: {
      const items = action.payload;
      return List(items);
    }

    case ACTIONS.SPACEROOMS_AVAILABILITY: {
      const { id, disabled } = action.payload;
      const key = state.findKey(item => item.id === id);
      return state.update(key, item => {
        item.disabled = disabled;
        return item;
      });
    }

    default:
      return state;
  }
};

export default reducer;
