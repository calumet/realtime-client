import React from 'react';
import { shallow } from 'enzyme';
import RoomsListItem from './index';

const setup = function (props, children) {
  return shallow(<RoomsListItem {...props}>{children}</RoomsListItem>);
};

describe('Components', function () {
  describe('RoomsListItem', function () {

    it('Default class', function () {
      const el = setup(null, 'Room 1');
      const actual = el.hasClass('rooms-list-item');
      expect(actual).to.be.true;
    });

    it('Name is set properly', function () {
      const el = setup(null, 'Room 1');
      const actual = el.find('.rooms-list-item__name').contains('Room 1');
      expect(actual).to.be.true;
    });

    it('Activity class is set properly', function () {
      const el = setup({ activity: true }, 'Room 1');
      const actual = el.hasClass('rooms-list-item--activity');
      expect(actual).to.be.true;
    });

    it('Active class is set properly', function () {
      const el = setup({ active: true }, 'Room 1');
      const actual = el.hasClass('rooms-list-item--active');
      expect(actual).to.be.true;
    });

  });
});
