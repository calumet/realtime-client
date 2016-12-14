import { List } from 'immutable';
import { ACTIONS } from 'consts';
import reducer from './index';

describe('Reducers', function () {
  describe('Connections', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql([]);
    });

    it('Add an item', function () {
      const state = List();
      const action = {
        type: ACTIONS.CON.ADD,
        payload: { id: 'q1', socket: 'x0' }
      };
      const actual = reducer(state, action);
      const expected = { id: 'q1', socket: 'x0' };

      expect(List.isList(actual)).to.be.true;
      expect(actual.get(0)).to.eql(expected);
    });

    it('Remove an item', function () {
      const state = List([
        { id: '1', socket: 'x0' },
        { id: '2', socket: 'x1' }
      ]);
      const action = {
        type: ACTIONS.CON.REMOVE,
        payload: '1'
      };
      const actual = reducer(state, action);
      const expected = [{ id: '2', socket: 'x1' }];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

    it('Reset all items', function () {
      const state = List([
        { id: '1', socket: 'x0' },
        { id: '2', socket: 'x1' }
      ]);
      const action = {
        type: ACTIONS.CON.RESET,
        payload: [
          { id: 'w1', socket: 'y9' },
          { id: 'w2', socket: 'y10' }
        ]
      };
      const actual = reducer(state, action);
      const expected = [
        { id: 'w1', socket: 'y9' },
        { id: 'w2', socket: 'y10' }
      ];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

    it('Unknown type', function () {
      const state = List([
        { id: '1', socket: 'x0' },
        { id: '2', socket: 'x1' }
      ]);
      const action = {
        type: 9999,
        payload: [
          { id: 'w1', socket: 'y9' },
          { id: 'w2', socket: 'y10' }
        ]
      };
      const actual = reducer(state, action);
      const expected = [
        { id: '1', socket: 'x0' },
        { id: '2', socket: 'x1' }
      ];

      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql(expected);
    });

  });
});
