import { List } from 'immutable';
import { ACTIONS } from 'src/consts';

const initial = List();

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.USERS_RESET: {
      const items = action.payload;
      return List(items);
    }

    default:
      return state;
  }
};

export default reducer;
