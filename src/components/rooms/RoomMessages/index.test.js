import React from 'react';
import { shallow } from 'enzyme';
import RoomMessages from './index';

const setup = function (props, children) {
  return shallow(<RoomMessages {...props}>{children}</RoomMessages>);
};

describe('Components', function () {
  describe('Rooms', function () {
    describe('RoomMessages', function () {

      it('Default class', function () {
        const children = [
          <b key={0}>Msg0</b>,
          <b key={1}>Msg1</b>
        ];
        const el = setup(null, children);
        const actual = el.hasClass('rooms-roommessages');
        expect(actual).to.be.true;
      });

      it('Content set properly', function () {
        const children = [
          <b key={0}>Msg0</b>,
          <i key={1}>Msg1</i>
        ];
        const el = setup(null, children);
        const actual1 = el.contains(<b>Msg0</b>);
        const actual2 = el.contains(<i>Msg1</i>);
        expect(actual1).to.be.true;
        expect(actual2).to.be.true;
      });

    });
  });
});
