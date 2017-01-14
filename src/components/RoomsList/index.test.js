import React from 'react';
import { shallow } from 'enzyme';
import RoomsList from './index';

const setup = function (props, children) {
  return shallow(<RoomsList {...props}>{children}</RoomsList>);
};

describe('Components', function () {
  describe('RoomsList', function () {

    it('Default class', function () {
      const el = setup();
      const actual = el.hasClass('rooms-roomslist');
      expect(actual).to.be.true;
    });

    it('Items are set properly', function () {
      const el = setup(null, [
        <b key={0}>Room1</b>,
        <b key={1}>Room2</b>
      ]);
      const actual = el.find('.rooms-roomslist__items').equals(
        <div className='rooms-roomslist__items'>
          <b>Room1</b>
          <b>Room2</b>
        </div>
      );
      expect(actual).to.be.true;
    });

  });
});
