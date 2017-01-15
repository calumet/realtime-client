import React from 'react';
import { shallow } from 'enzyme';
import UsersList from './index';

const setup = function (props, children) {
  return shallow(<UsersList {...props}>{children}</UsersList>);
};

describe('Components', function () {
  describe('UsersList', function () {

    it('Default className', function () {
      const el = setup();
      const actual = el.hasClass('users-list');
      expect(actual).to.be.true;
    });

    it('List is rendered', function () {
      const el = setup(null, [
        <b key={0}>User1</b>,
        <b key={1}>User2</b>
      ]);
      const actual = el.find('.users-list__list').equals(
        <div className='users-list__list'>
          <b>User1</b>
          <b>User2</b>
        </div>
      );
      expect(actual).to.be.true;
    });

  });
});
