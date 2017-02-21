import React from 'react';
import { shallow, mount } from 'enzyme';
import RoomType from './index';

const ENTER = 13;

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

    it('If disabled, disable textarea and button', function () {
      const el = mountEl({ disabled: true });
      expect(el.find('textarea').prop('disabled')).to.be.true;
      expect(el.find('button').prop('disabled')).to.be.true;
    });

    it('If disabled is string, show it as textarea content', function () {
      const el = mountEl({ disabled: 'This is disabled.' });
      expect(el.find('textarea').prop('value')).to.equal('This is disabled.');
    });

    it('If disabled, onSend should never be called', function () {
      const onSend = sinon.spy();
      const el = mountEl({ disabled: true, onSend });

      el.find('textarea').simulate('change', { target: { value: 'Something' } });
      el.find('textarea').simulate('keypress', { which: ENTER });
      el.find('button').simulate('click');

      expect(onSend.called).to.be.false;
    });

  });
});
