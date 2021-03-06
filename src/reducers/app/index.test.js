import { Map } from 'immutable';
import { ACTIONS } from 'src/consts';
import reducer from './index';

describe('Reducers', function () {
  describe('App', function () {

    it('Default state', function () {
      const actual = reducer(undefined, {});
      expect(Map.isMap(actual)).to.be.true;
      expect(actual.toObject()).to.eql({
        starting: false,
        started: false,
        connected: false,
        error: null,
        fatal: null,
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

    it('Connect app', function () {
      const state = Map();
      const action = {
        type: ACTIONS.APP_CONNECT,
        payload: true
      };
      const actual = reducer(state, action);
      const expected = { connected: true };

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
