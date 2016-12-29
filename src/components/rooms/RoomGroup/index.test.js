import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RoomGroup from './index';

const setup = function (props, children) {
  return shallow(<RoomGroup {...props}>{children}</RoomGroup>);
};

describe('Components', function () {
  describe('Rooms', function () {
    describe('RoomGroup', function () {

      it('Default tag', function () {
        const el = setup({ header: 'Group' }, <b />);
        const actual = el.is('section');
        expect(actual).to.be.true;
      });

      it('Default class', function () {
        const el = setup({ header: 'Group' }, <b />);
        const actual = el.hasClass('rooms-roomgroup');
        expect(actual).to.be.true;
      });

      it('Content set properly', function () {
        const el = setup({ header: 'Group' }, <b>Messages List</b>);
        const actual = el.contains(<b>Messages List</b>);
        expect(actual).to.be.true;
      });

      it('Header set properly', function () {
        const el = setup({ header: 'Group Header' }, <b />);
        const actual = el.find('h2').text();
        const expected = 'Group Header';
        expect(actual).to.equal(expected);
      });

    });
  });
});
