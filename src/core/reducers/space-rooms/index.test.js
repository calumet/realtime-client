import { List } from 'immutable';
import { ACTIONS } from 'consts';
import reducer from './index';

describe('Reducers', function () {
  describe('Space Rooms', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(List.isList(actual)).to.be.true;
      expect(actual.toArray()).to.eql([]);
    });

    it('Reset items', function () {
      const state = List([
        { id: '1', socket: 'x0' },
        { id: '2', socket: 'x1' }
      ]);
      const action = {
        type: ACTIONS.SPACEROOMS_RESET,
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

    it('Enable an item', function () {
      const state = List([
        { id: 'q1', socket: 'x0', disabled: false },
        { id: 'q2', socket: 'x1', disabled: false }
      ]);
      const action = {
        type: ACTIONS.SPACEROOMS_AVAILABILITY,
        payload: { id: 'q2', disabled: true }
      };
      const actual = reducer(state, action);
      const expected = [
        { id: 'q1', socket: 'x0', disabled: false },
        { id: 'q2', socket: 'x1', disabled: true }
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
