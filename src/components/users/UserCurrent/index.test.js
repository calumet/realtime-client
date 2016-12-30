import React from 'react';
import { shallow } from 'enzyme';
import UserCurrent from './index';

const setup = function (props, children) {
  return shallow(<UserCurrent {...props}>{children}</UserCurrent>);
};

describe('Components', function () {
  describe('Users', function () {
    describe('UserCurrent', function () {

      it('Default className', function () {
        const el = setup(null, <div />);
        const actual = el.hasClass('users-usercurrent');
        expect(actual).to.be.true;
      });

      it('User element is set properly', function () {
        const el = setup(null, <b>UserName</b>);
        const actual = el.find('.users-usercurrent__user').contains(<b>UserName</b>);
        expect(actual).to.be.true;
      });

    });
  });
});
