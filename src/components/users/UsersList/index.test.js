import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import UsersList from './index';

const setup = function (props, children) {
  return shallow(<UsersList {...props}>{children}</UsersList>);
};

describe('Components', function () {
  describe('Users', function () {
    describe('UsersList', function () {

      it('Default className', function () {
        const el = setup();
        const actual = el.hasClass('users-userslist');
        expect(actual).to.be.true;
      });

      it('List is rendered', function () {
        const el = setup(null, [
          <b key={0}>User1</b>,
          <b key={1}>User2</b>
        ]);
        const actual = el.find('.users-userslist__list').equals(
          <div className='users-userslist__list'>
            <b>User1</b>
            <b>User2</b>
          </div>
        );
        expect(actual).to.be.true;
      });

    });
  });
});
