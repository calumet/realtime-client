import { List } from 'immutable';
import { ACTIONS } from 'src/consts';
import reducer from './index';

describe('Reducers', function () {
  describe('Rooms Messages', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql([]);
    });

    it('Add an item', function () {
      const state = List();
      const action = {
        type: ACTIONS.ROOMSMSGS_ADD,
        payload: { id: 'q1', content: 'x0' }
      };
      const actual = reducer(state, action);
      const expected = { id: 'q1', content: 'x0' };

      expect(List.isList(actual)).to.be.true;
      expect(actual.get(0)).to.eql(expected);
    });

    it('Merge items', function () {
      const state = List([
        { id: '1', content: 'x0' },
        { id: '2', content: 'x1' }
      ]);
      const action = {
        type: ACTIONS.ROOMSMSGS_MERGE,
        payload: [
          { id: '2', content: 'y9' },
          { id: '3', content: 'y10' }
        ]
      };
      const actual = reducer(state, action);
      const expected = [
        { id: '1', content: 'x0' },
        { id: '2', content: 'y9' },
        { id: '3', content: 'y10' }
      ];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

    it('Unknown type', function () {
      const state = List([
        { id: '1', content: 'x0' },
        { id: '2', content: 'x1' }
      ]);
      const action = {
        type: 9999,
        payload: [
          { id: 'w1', content: 'y9' },
          { id: 'w2', content: 'y10' }
        ]
      };
      const actual = reducer(state, action);
      const expected = [
        { id: '1', content: 'x0' },
        { id: '2', content: 'x1' }
      ];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

  });
});
