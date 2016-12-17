import mergeCollections from 'prhone-tools/merge-collections';
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

    case ACTIONS.ROOMSMSGS.ADD: {
      const item = action.payload;
      return state.push(item);
    }

    case ACTIONS.ROOMSMSGS.MERGE: {
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
