import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './index';

const setup = function (props, children) {
  return shallow(<Header {...props}>{children}</Header>);
};

const mountEl = function (props, children) {
  return mount(<Header {...props}>{children}</Header>);
};

describe('Components', function () {
  describe('Header', function () {

    it('Default class', function () {
      const el = setup();
      expect(el.hasClass('header')).to.be.true;
    });

    it('Title is set properly', function () {
      const el = setup({ title: 'Comunidad Académica' });
      const actual = el.find('.header__title');
      expect(actual.exists()).to.be.true;
      expect(actual.is('h1')).to.be.true;
      expect(actual.text()).to.equal('Comunidad Académica');
    });

    it('Subtitle is set properly', function () {
      const el = setup({ subtitle: 'Ingeniería de Software II' });
      const actual = el.find('.header__subtitle');
      expect(actual.exists()).to.be.true;
      expect(actual.is('h2')).to.be.true;
      expect(actual.text()).to.equal('Ingeniería de Software II');
    });

    it('On menu toggle, should execute callback if provided', function () {
      const onMenuToggle = sinon.spy();
      const el = mountEl({ onMenuToggle });
      expect(onMenuToggle.called).to.be.false;

      el.find('.header__menu').simulate('click');
      expect(onMenuToggle.calledOnce).to.be.true;

      el.find('.header__menu').simulate('click');
      expect(onMenuToggle.calledTwice).to.be.true;
    });

  });
});
