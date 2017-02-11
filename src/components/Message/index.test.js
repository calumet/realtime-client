import React from 'react';
import { shallow } from 'enzyme';
import Message from './index';

const setup = function (props, children) {
  return shallow(<Message {...props}>{children}</Message>);
};

describe('Components', function () {
  describe('Message', function () {

    it('Default class', function () {
      const el = setup({ name: 'Romel', timestamp: Date.now() }, 'Content');
      const actual = el.hasClass('message');
      expect(actual).to.be.true;
    });

    it('Name set properly', function () {
      const el = setup({ name: 'Romel', timestamp: Date.now() }, 'Content');
      const actual = el.find('.message__name').text();
      const expected = 'Romel';
      expect(actual).to.equal(expected);
    });

    it('Timestamp set properly', function () {
      // Timestamp: Thu Dec 22 20:32:54 COT 2016
      const el = setup({ name: 'Romel', timestamp: 1482456770030 }, 'Content');
      const actual = el.find('.message__time').text();
      const expected = '8:32 PM';
      expect(actual).to.equal(expected);
    });

    it('Content set properly', function () {
      const el = setup({ name: 'Romel', timestamp: Date.now() }, 'A beautiful content');
      const actual = el.find('.message__content').text();
      const expected = 'A beautiful content';
      expect(actual).to.equal(expected);
    });

    it('Photo set properly', function () {
      const el = setup({
        name: 'Romel',
        timestamp: Date.now(),
        photo: 'https://avatars3.githubusercontent.com/u/1393135'
      }, 'Content');
      const actual = el.find('.message__photo').prop('style');
      const expected = {
        backgroundImage: 'url(https://avatars3.githubusercontent.com/u/1393135)'
      };
      expect(actual).to.eql(expected);
    });

    it('Moderator set properly', function () {
      const el = setup({ name: 'Romel', timestamp: Date.now(), moderator: true }, 'Content');
      const hasClass = el.hasClass('message--moderator');
      const hasEl = el.find('.message__moderator').exists();
      expect(hasClass).to.be.true;
      expect(hasEl).to.be.true;
    });

  });
});
