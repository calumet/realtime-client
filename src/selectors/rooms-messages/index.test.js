// IMPORTANT: Este test depende del timezone del navegador. Si hay suficiente
// variación, puede no correr. Se utilizó GMT-5 en la noche y funcionó.

import selector from './index';

describe('Selectors', function () {
  describe('roomsMessages', function () {

    it('Empty lists should return empty list', function () {
      const state = {
        spaceRooms: [],
        roomsMessages: []
      };
      const actual = selector(state);
      const expected = [];
      expect(actual).to.eql(expected);
    });

    it('Rooms without messages should be present without items', function () {
      const state = {
        spaceRooms: [
          { id: 'r0' },
          { id: 'r1' }
        ],
        roomsMessages: []
      };
      const actual = selector(state);
      const expected = [
        { id: 'r0', messages: [], groups: [] },
        { id: 'r1', messages: [], groups: [] }
      ];
      expect(actual).to.eql(expected);
    });

    it('Rooms with messages', function () {
      const state = {
        spaceRooms: [
          { id: 'r0' },
          { id: 'r1' }
        ],
        roomsMessages: [
          { id: 'm2', room: 'r0', user: 'u0', content: 'Message2', createdAt: 1480845600000 }, // '2016-12-04T10:00:00'
          { id: 'm1', room: 'r0', user: 'u2', content: 'Message1', createdAt: 1469354400000 }, // '2016-07-24T10:00:00'
          { id: 'm0', room: 'r0', user: 'u0', content: 'Message0', createdAt: 1467626400000 }, // '2016-07-04T10:00:00'
          { id: 'm3', room: 'r0', user: 'u1', content: 'Message3', createdAt: 1482573600000 }, // '2016-12-24T10:00:00'
          { id: 'm6', room: 'r0', user: 'u1', content: 'Message6', createdAt: 1484676000000 }, // '2017-01-17T18:00:00'
          { id: 'm7', room: 'r0', user: 'u1', content: 'Message7', createdAt: 1484686800000 }, // '2017-01-17T21:00:00'
          { id: 'm4', room: 'r0', user: 'u1', content: 'Message4', createdAt: 1482580800000 }, // '2016-12-24T12:00:00'
          { id: 'm8', room: 'r0', user: 'u0', content: 'Message8', createdAt: 1486735200000 }, // '2017-02-10T14:00:00'
          { id: 'm5', room: 'r0', user: 'u2', content: 'Message5', createdAt: 1483956000000 } // '2017-01-09T10:00:00'
        ]
      };
      const actual = selector(state);
      const expected = [
        {
          id: 'r0',
          messages: [
            { id: 'm0', room: 'r0', user: 'u0', content: 'Message0', createdAt: 1467626400000 }, // '2016-07-04T10:00:00'
            { id: 'm1', room: 'r0', user: 'u2', content: 'Message1', createdAt: 1469354400000 }, // '2016-07-24T10:00:00'
            { id: 'm2', room: 'r0', user: 'u0', content: 'Message2', createdAt: 1480845600000 }, // '2016-12-04T10:00:00'
            { id: 'm3', room: 'r0', user: 'u1', content: 'Message3', createdAt: 1482573600000 }, // '2016-12-24T10:00:00'
            { id: 'm4', room: 'r0', user: 'u1', content: 'Message4', createdAt: 1482580800000 }, // '2016-12-24T12:00:00'
            { id: 'm5', room: 'r0', user: 'u2', content: 'Message5', createdAt: 1483956000000 }, // '2017-01-09T10:00:00'
            { id: 'm6', room: 'r0', user: 'u1', content: 'Message6', createdAt: 1484676000000 }, // '2017-01-17T18:00:00'
            { id: 'm7', room: 'r0', user: 'u1', content: 'Message7', createdAt: 1484686800000 }, // '2017-01-17T21:00:00'
            { id: 'm8', room: 'r0', user: 'u0', content: 'Message8', createdAt: 1486735200000 } // '2017-02-10T14:00:00'
          ],
          groups: [
            {
              datetime: '2016-07-04',
              title: 'Monday, July 4',
              messages: [
                { id: 'm0', room: 'r0', user: 'u0', content: 'Message0', createdAt: 1467626400000 } // '2016-07-04T10:00:00'
              ]
            },
            {
              datetime: '2016-07-24',
              title: 'Sunday, July 24',
              messages: [
                { id: 'm1', room: 'r0', user: 'u2', content: 'Message1', createdAt: 1469354400000 } // '2016-07-24T10:00:00'
              ]
            },
            {
              datetime: '2016-12-04',
              title: 'Sunday, December 4',
              messages: [
                { id: 'm2', room: 'r0', user: 'u0', content: 'Message2', createdAt: 1480845600000 } // '2016-12-04T10:00:00'
              ]
            },
            {
              datetime: '2016-12-24',
              title: 'Saturday, December 24',
              messages: [
                { id: 'm3', room: 'r0', user: 'u1', content: 'Message3', createdAt: 1482573600000 }, // '2016-12-24T10:00:00'
                { id: 'm4', room: 'r0', user: 'u1', content: 'Message4', createdAt: 1482580800000 } // '2016-12-24T12:00:00'
              ]
            },
            {
              datetime: '2017-01-09',
              title: 'Monday, January 9',
              messages: [
                { id: 'm5', room: 'r0', user: 'u2', content: 'Message5', createdAt: 1483956000000 }, // '2017-01-09T10:00:00'
              ]
            },
            {
              datetime: '2017-01-17',
              title: 'Tuesday, January 17',
              messages: [
                { id: 'm6', room: 'r0', user: 'u1', content: 'Message6', createdAt: 1484676000000 }, // '2017-01-17T18:00:00'
                { id: 'm7', room: 'r0', user: 'u1', content: 'Message7', createdAt: 1484686800000 } // '2017-01-17T21:00:00'
              ]
            },
            {
              datetime: '2017-02-10',
              title: 'Friday, February 10',
              messages: [
                { id: 'm8', room: 'r0', user: 'u0', content: 'Message8', createdAt: 1486735200000 } // '2017-02-10T14:00:00'
              ]
            }
          ]
        },
        {
          id: 'r1',
          messages: [],
          groups: []
        }
      ];

      expect(actual).to.be.an('array').to.have.lengthOf(2);

      actual.forEach((room, roomIndex) => {

        const expectedRoom = expected[roomIndex];

        expect(room).to.be.an('object');
        expect(room).to.have.property('id', expectedRoom.id);

        expect(room, `Room ${expectedRoom.id} does not have proper messages`).
          to.have.property('messages').
          to.be.an('array').
          to.have.lengthOf(expectedRoom.messages.length);

        room.messages.forEach((msg, msgIndex) => {
          expect(msg, `Room ${expectedRoom.id}, a message does not match`).
            to.eql(expectedRoom.messages[msgIndex]);
        });

        expect(room, `Room ${expectedRoom.id} does not have proper groups`).
          to.have.property('groups').
          to.be.an('array').
          to.have.lengthOf(expectedRoom.groups.length);

        room.groups.forEach((group, groupIndex) => {
          expect(group, `Room ${expectedRoom.id}, group ${groupIndex} does not match`).
            to.eql(expectedRoom.groups[groupIndex]);
        });
      });
    });

  });
});
