import selector from './index';

describe('Selectors', function () {
  describe('users', function () {

    it('Users list is not found', function () {
      const data = {
        users: [],
        usersCategories: []
      };
      const actual = selector(data);
      const expected = [];
      expect(actual).to.eql(expected);
    });

    it('Select all users found', function () {
      const data = {
        users: [{
          id: 'u0',
          firstName: 'María',
          photo: '/maria.jpg',
        }, {
          id: 'u1',
          firstName: 'Juan',
          photo: '/juan.jpg',
          category: 'c1'
        }, {
          id: 'u2',
          firstName: 'Sandra',
          lastName: 'Vargas',
          photo: '/sandra.jpg',
          category: 'c0'
        }],
        usersCategories: [{
          id: 'c0',
          name: 'Teacher'
        }, {
          id: 'c1',
          name: 'Student'
        }]
      };
      const actual = selector(data);
      const expected = [
        {
          id: 'u0',
          name: 'María',
          category: void 0,
          photo: '/maria.jpg',
        },
        {
          id: 'u1',
          name: 'Juan',
          category: 'Student',
          photo: '/juan.jpg',
        },
        {
          id: 'u2',
          name: 'Sandra Vargas',
          category: 'Teacher',
          photo: '/sandra.jpg',
        }
      ];
      expect(actual).to.be.an('array').to.have.lengthOf(3);
      actual.forEach((user, index) => {
        expect(user, `user ${index} does not match`).to.be.an('object').to.eql(expected[index]);
      });
    });

  });
});
