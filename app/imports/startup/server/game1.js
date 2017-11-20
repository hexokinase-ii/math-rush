import { Game1 } from '../../api/game1/game1.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const game1Seeds = [
  { username: 'lilpump', score: 99},
  { username: 'lilboat', score: 97},
  { username: 'A$AP Rocky', score: 96},
  { username: 'Jay Z', score: 95},
  { username: 'K dot', score: 94},
  { username: 'Spongebob', score: 92},
  { username: 'KevinAbstract', score: 90},
  { username: 'A$AP Ferg', score: 89},
  { username: 'Tyler The Creator', score: 87},
  { username: 'Elmo', score: 84},
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Game1.find().count() === 0) {
  _.each(game1Seeds, function seedUsers(user) {
    Game1.insert(user);
  });
}
