import React from 'react';
import { shallow } from 'enzyme';
import Aside from './index';

const setup = function (props, children) {
  return shallow(<Aside {...props}>{children}</Aside>);
};

describe('Components', function () {
  describe('Aside', function () {

    it('Default class', function () {
      const el = setup();
      expect(el.hasClass('aside')).to.be.true;
    });

    it('Header set properly', function () {
      const el = setup({ header: <b>Custom Header</b> });
      const actual = el.find('.aside__header').contains(<b>Custom Header</b>);
      expect(actual).to.be.true;
    });

  });
});
