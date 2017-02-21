import React from 'react';
import { shallow } from 'enzyme';
import ScreenMessage from './index';

const setup = function (props, children) {
  return shallow(<ScreenMessage {...props}>{children}</ScreenMessage>);
};

describe('Components', function () {
  describe('ScreenMessage', function () {

    it('Default class', function () {
      const el = setup();
      expect(el.hasClass('screen-message')).to.be.true;
      expect(el.hasClass('screen-message-error')).to.be.false;
    });

    it('Error class', function () {
      const el = setup({ type: 'error' });
      expect(el.hasClass('screen-message--error')).to.be.true;
    });

    it('Default icon', function () {
      const el = setup();
      expect(el.find('.screen-message__icon').hasClass('mdi-alert')).to.be.true;
    });

    it('Modifier icon', function () {
      const el = setup({ icon: 'home' });
      expect(el.find('.screen-message__icon').hasClass('mdi-home')).to.be.true;
    });

    it('Text content', function () {
      const el = setup(null, 'Message text.');
      expect(el.find('.screen-message__text').text()).to.equal('Message text.');
    });

  });
});
