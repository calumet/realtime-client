import { Map } from 'immutable';
import { ACTIONS } from 'consts';
import reducer from './index';

describe('Reducers', function () {
  describe('App', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql({
        starting: false,
        started: false,
        error: null,
        fatal: null,
        room: null
      });
    });

    it('Start app', function () {
      const state = Map();
      const action = {
        type: ACTIONS.APP_START,
      };
      const actual = reducer(state, action);
      const expected = { starting: true, started: false, fatal: null };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Started app', function () {
      const state = Map();
      const action = {
        type: ACTIONS.APP_STARTED,
      };
      const actual = reducer(state, action);
      const expected = { starting: false, started: true, fatal: null };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Normal error', function () {
      const state = Map();
      const action = {
        type: ACTIONS.APP_ERROR,
        payload: { message: 'An error ocurred' },
      };
      const actual = reducer(state, action);
      const expected = {
        error: { message: 'An error ocurred' }
      };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Fatal error', function () {
      const state = Map();
      const action = {
        type: ACTIONS.APP_FATAL,
        payload: { message: 'An error ocurred' },
      };
      const actual = reducer(state, action);
      const expected = {
        starting: false,
        started: false,
        fatal: { message: 'An error ocurred' }
      };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

    it('Change current room', function () {
      const state = Map();
      const action = {
        type: ACTIONS.APP_CHANGEROOM,
        payload: 10,
      };
      const actual = reducer(state, action);

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.have.property('room', 10);
    });

    it('Unknown type', function () {
      const state = Map({ id: 'x', name: 'My App' });
      const action = {
        type: 9999,
        payload: { id: '1', name: 'An App' }
      };
      const actual = reducer(state, action);
      const expected = { id: 'x', name: 'My App' };

      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql(expected);
    });

  });
});
