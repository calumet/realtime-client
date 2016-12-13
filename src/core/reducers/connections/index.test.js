import { Map } from 'immutable';
import { ACTIONS } from 'consts';
import reducer from './index';

describe('Reducers', function () {
  describe('Connections', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql({});
    });

    it('Add an item', function () {
      const id = '1';
      const state = Map();
      const action = {
        type: ACTIONS.CON.ADD,
        payload: { id, socket: 'x0' }
      };
      const actual = reducer(state, action);
      const expected = { id, socket: 'x0' };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.get(id)).to.eql(expected);
    });

    it('Remove an item', function () {
      const state = Map({ '1': { id: '1', socket: 'x0' }, '2': { id: '2', socket: 'x1' } });
      const action = {
        type: ACTIONS.CON.REMOVE,
        payload: { id: '1' }
      };
      const actual = reducer(state, action);
      const expected = { '2': { id: '2', socket: 'x1' } };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Reset all items', function () {
      const state = Map({ '1': { id: '1', socket: 'x0' }, '2': { id: '2', socket: 'x1' } });
      const action = {
        type: ACTIONS.CON.RESET,
        payload: [ { id: 'w1', socket: 'y9' }, { id: 'w2', socket: 'y10' } ]
      };
      const actual = reducer(state, action);
      const expected = { 'w1': { id: 'w1', socket: 'y9' }, 'w2': { id: 'w2', socket: 'y10' } };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Unknown type', function () {
      const state = Map({ '1': { id: '1', socket: 'x0' }, '2': { id: '2', socket: 'x1' } });
      const action = {
        type: 9999,
        payload: [ { id: 'w1', socket: 'y9' } ]
      };
      const actual = reducer(state, action);
      const expected = { '1': { id: '1', socket: 'x0' }, '2': { id: '2', socket: 'x1' } };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

  });
});
