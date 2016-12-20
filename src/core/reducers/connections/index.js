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

    case ACTIONS.CON_ADD: {
      const item = action.payload;
      return state.push(item);
    }

    case ACTIONS.CON_REMOVE: {
      const id = action.payload;
      const key = state.findKey(item => item.id === id);
      return state.remove(key);
    }

    case ACTIONS.CON_MERGE: {
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
