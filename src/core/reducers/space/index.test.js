import { Map } from 'immutable';
import { ACTIONS } from 'consts';
import reducer from './index';

describe('Reducers', function () {
  describe('Space', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql({});
    });

    it('Update map', function () {
      const state = Map({ id: 'q7', code: 'x9' });
      const action = {
        type: ACTIONS.CON.UPDATE,
        payload: { id: 'x1', name: 'Space01' }
      };
      const actual = reducer(state, action);
      const expected = { id: 'x1', name: 'Space01', code: 'x9' };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Unknown type', function () {
      const state = Map({ id: 'x', name: 'My Space' });
      const action = {
        type: 9999,
        payload: { id: '1', name: 'An Space' }
      };
      const actual = reducer(state, action);
      const expected = { id: 'x', name: 'My Space' };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

  });
});
