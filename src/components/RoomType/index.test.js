import React from 'react';
import { shallow, mount } from 'enzyme';
import RoomType from './index';

const shallowEl = function (props, children) {
  return shallow(<RoomType {...props}>{children}</RoomType>);
};

const mountEl = function (props, children) {
  return mount(<RoomType {...props}>{children}</RoomType>);
};

describe('Components', function () {
  describe('RoomType', function () {

    it('Default class', function () {
      const el = shallowEl();
      const actual = el.at(0).hasClass('room-type');
      expect(actual).to.be.true;
    });

    it('A textarea should be created', function () {
      const el = mountEl();
      const actual = el.find('textarea');
      expect(actual).to.have.lengthOf(1);
    });

    it('Default message', function () {
      const el = mountEl();
      const actual = el.find('textarea').text();
      const expected = '';
      expect(actual).to.equal(expected);
    });

    it('Set default message', function () {
      const message = 'A random message...';
      const el = mountEl({ message });
      const actual = el.find('textarea').text();
      expect(actual).to.equal(message);
    });

    it('On send button click, call the onSend callback only if there is content', function () {
      const message = 'A random message...';
      const onSend = sinon.spy();
      const el = mountEl({ onSend });

      el.find('button').simulate('click');
      expect(onSend.called).to.be.false;
      expect(el.find('textarea').text()).to.equal('');

      el.find('textarea').simulate('change', { target: { value: message } });
      el.find('button').simulate('click');
      expect(onSend.calledOnce).to.be.true;
      expect(onSend.calledWith({ message })).to.be.true;
      expect(el.find('textarea').text()).to.equal('');
    });

    it('On ENTER key, call the onSend callback only if there is content', function () {
      const ENTER = 13;
      const message = 'A random message...';
      const onSend = sinon.spy();
      const el = mountEl({ onSend });

      el.find('textarea').simulate('keypress', { which: ENTER });
      expect(onSend.called).to.be.false;
      expect(el.find('textarea').text()).to.equal('');

      el.find('textarea').simulate('change', { target: { value: message } });
      el.find('textarea').simulate('keypress', { which: ENTER });
      expect(onSend.calledOnce).to.be.true;
      expect(onSend.calledWith({ message })).to.be.true;
      expect(el.find('textarea').text()).to.equal('');
    });

  });
});
