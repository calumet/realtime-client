import { List } from 'immutable';
import { ACTIONS } from 'consts';
import reducer from './index';

describe('Reducers', function () {
  describe('Users Categories', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql([]);
    });

    it('Reset all items', function () {
      const state = List([
        { id: '1', name: 'x0' },
        { id: '2', name: 'x1' }
      ]);
      const action = {
        type: ACTIONS.USERSCATEGORIES.RESET,
        payload: [
          { id: 'w1', name: 'y9' },
          { id: 'w2', name: 'y10' }
        ]
      };
      const actual = reducer(state, action);
      const expected = [
        { id: 'w1', name: 'y9' },
        { id: 'w2', name: 'y10' }
      ];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

    it('Unknown type', function () {
      const state = List([
        { id: '1', name: 'x0' },
        { id: '2', name: 'x1' }
      ]);
      const action = {
        type: 9999,
        payload: [
          { id: 'w1', name: 'y9' },
          { id: 'w2', name: 'y10' }
        ]
      };
      const actual = reducer(state, action);
      const expected = [
        { id: '1', name: 'x0' },
        { id: '2', name: 'x1' }
      ];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

  });
});
