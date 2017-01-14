import React from 'react';
import { shallow } from 'enzyme';
import Room from './index';

const setup = function (props, children) {
  return shallow(<Room {...props}>{children}</Room>);
};

describe('Components', function () {
  describe('Room', function () {

    it('Default class', function () {
      const el = setup();
      const actual = el.hasClass('rooms-room');
      expect(actual).to.be.true;
    });

    it('Default content', function () {
      const children = [
        <b key={1}>el1</b>,
        <i key={2}>el2</i>
      ];
      const el = setup(null, children);
      expect(el.contains(<b>el1</b>)).to.be.true;
      expect(el.contains(<i>el2</i>)).to.be.true;
    });

  });
});
