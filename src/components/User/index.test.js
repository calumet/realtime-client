import React from 'react';
import { shallow } from 'enzyme';
import User from './index';

const setup = function (props) {
  return shallow(<User {...props} />);
};

describe('Components', function () {
  describe('User', function () {

    it('Default className', function () {
      const el = setup({ name: 'Pepe' });
      const actual = el.hasClass('user');
      expect(actual).to.be.true;
    });

    it('Photo by default is no set', function () {
      const el = setup({ name: 'Pepe' });
      const actual = el.find('.user__photo').prop('style');
      expect(actual).to.be.falsy;
    });

    it('Photo is set properly', function () {
      const el = setup({ name: 'Pepe', photo: '/img/photo.jpg' });
      const actual = el.find('.user__photo').prop('style');
      const expected = { backgroundImage: 'url(/img/photo.jpg)' };
      expect(actual).to.eql(expected);
    });

    it('Name is set properly', function () {
      const el = setup({ name: 'Pepe Pérez' });
      const actual = el.find('.user__name').text();
      const expected = 'Pepe Pérez';
      expect(actual).to.equal(expected);
    });

    it('Category is set properly', function () {
      const el = setup({ name: 'Pepe Pérez', category: 'Estudiante' });
      const actual = el.find('.user__cat').text();
      const expected = 'Estudiante';
      expect(actual).to.equal(expected);
    });

    it('Status by default is not set', function () {
      const el = setup({ name: 'Pepe' });
      const actual = el.hasClass('user--online');
      expect(actual).to.be.false;
    });

    it('Status is set properly', function () {
      const el = setup({ name: 'Pepe', online: true });
      const actual = el.hasClass('user--online');
      expect(actual).to.be.true;
    });

    it('Moderator is set properly', function () {
      const el = setup({ name: 'Pepe', moderator: true });
      const actual = el.hasClass('user--moderator');
      expect(actual).to.be.true;
    });

    it('Inactive is set properly', function () {
      const el = setup({ name: 'Pepe', inactive: true });
      const actual = el.hasClass('user--inactive');
      expect(actual).to.be.true;
    });

    it('Theme by default', function () {
      const el = setup({ name: 'Pepe' });
      const actual = el.prop('data-theme');
      expect(actual).to.be.falsy;
    });

    it('Theme set properly', function () {
      const el = setup({ name: 'Pepe', theme: 'inverse' });
      const actual = el.prop('data-theme');
      const expected = 'inverse';
      expect(actual).to.equal(expected);
    });

  });
});
