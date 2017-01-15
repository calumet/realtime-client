import mergeCollections from 'prhone-tools/merge-collections';
import { List } from 'immutable';
import { ACTIONS } from 'src/consts';

const initial = List();

const reducer = function (state = initial, action) {

  switch (action.type) {

    case ACTIONS.ROOMSMSGS_ADD: {
      const item = action.payload;
      return state.push(item);
    }

    case ACTIONS.ROOMSMSGS_MERGE: {
      const current = state.toArray();
      const items = action.payload;
      const merged = mergeCollections(current, items);
      return List(merged);
    }

    default:
      return state;
  }
};

export default reducer;
