import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Game1 = new Mongo.Collection('game1');

/**
 * Create the schema for Stuff
 */
export const Game1Schema = new SimpleSchema({
  username: {
    label: 'username',
    type: String,
    optional: false,
    max: 200,
  },
  score: {
    label: 'score',
    type: Number,
    optional: false,
  },
});

Game1.attachSchema(Game1Schema);
