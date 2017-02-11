import selector from './index';

describe('Selectors', function () {
  describe('roomsUsers', function () {

    it('Empty lists should return empty list', function () {
      const data = {
        spaceRooms: [],
        roomsUsers: [],
        connections: []
      };
      const actual = selector(data);
      const expected = [];
      expect(actual).to.eql(expected);
    });

    it('Select all users in rooms', function () {
      const data = {
        spaceRooms: [
          { id: 'r0' },
          { id: 'r1' },
          { id: 'r2' }
        ],
        roomsUsers: [
          { id: 'ru0', room: 'r0', user: 'u0', moderator: false, inactive: false },
          { id: 'ru1', room: 'r0', user: 'u1', moderator: true, inactive: false },
          { id: 'ru2', room: 'r2', user: 'u2', moderator: false, inactive: true, },
          { id: 'ru3', room: 'r2', user: 'u3', moderator: false, inactive: true, }
        ],
        connections: [
          { id: 'c0', room: 'r0', user: 'u0' },
          { id: 'c1', room: 'r2', user: 'u2' }
        ],
      };
      const actual = selector(data);
      const expected = [
        {
          id: 'r0',
          users: [
            {
              id: 'u0',
              moderator: false,
              inactive: false,
              online: true
            },
            {
              id: 'u1',
              moderator: true,
              inactive: false,
              online: false
            }
          ]
        },
        {
          id: 'r1',
          users: []
        },
        {
          id: 'r2',
          users: [
            {
              id: 'u2',
              moderator: false,
              inactive: true,
              online: true
            },
            {
              id: 'u3',
              moderator: false,
              inactive: true,
              online: false
            }
          ]
        }
      ];

      expect(actual).to.be.an('array').to.have.lengthOf(3);

      actual.forEach((room, index) => {

        const expectedId = expected[index].id;
        const expectedUsers = expected[index].users;

        expect(room).
          to.be.an('object').
          to.have.property('id', expectedId);

        expect(room).
          to.have.property('users').
          to.be.an('array').
          to.have.lengthOf(expectedUsers.length);

        room.users.forEach(user => {
          expect(user).to.be.an('object').to.have.property('id');

          const expectedUser = expectedUsers.find(u => u.id === user.id) || {};
          expect(user, `Room ${expectedId} user ${expectedUser.id} does not match`).
            to.eql(expectedUser);
        });
      });
    });

  });
});
