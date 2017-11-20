import { Users } from '../../api/users/users.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const userSeeds = [
  { first: 'Lil', last: 'Pump', username: 'lilpump', email: 'lilpump@gmail.com' },
  { first: '50', last: 'Cent', username: '50cent', email: '50cent@gmail.com' },
  { first: 'Kendrick', last: 'Lamar', username: 'kungfukenny', email: 'kdot@gmail.com' },
  { first: 'Jay', last: 'Z', username: 'hov', email: 'Jigga@gmail.com' },
  { first: 'Rakim', last: 'Meyers', username: 'A$AP Rocky', email: 'A$APRocky@gmail.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Users.find().count() === 0) {
  _.each(userSeeds, function seedUsers(user) {
    Users.insert(user);
  });
}
