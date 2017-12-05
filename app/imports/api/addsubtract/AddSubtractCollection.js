import SimpleSchema from 'simpl-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';


class AddSubtractCollection extends BaseCollection {

  /**
   * Creates the AddSubtract collection.
   */
  constructor() {
    super('AddSubtract', new SimpleSchema({
      num1: { type: Number },
      num2: { type: Number },
      operator: { type: String },
      answer: { type: Number },
    }, { tracker: Tracker }));
  }
  define({ num1, num2, operator, answer }) {
    check(num1, Number);
    check(num2, Number);
    check(operator, String);
    check(answer, Number);

    const addsubtract = {
      '+': function (a, b) {
        return a + b;
      },
      '-': function (a, b) {
        return a - b;
      },
    };

    if (operator !== '+' || operator !== '-') {
      throw new Meteor.Error(`${operator} is not addition or subtraction`);
    }
    if (addsubtract[operator](num1, num2) !== answer) {
      throw new Meteor.Error(`${answer} is not the correct answer to this operation`);
    }
    return this._collection.insert({ num1, num2, operator, answer });
  }
/**
  /**
   * Returns the AddSubtract name corresponding to the passed interest docID.
   * @param interestID An interest docID.
   * @returns { String } An interest name.
   * @throws { Meteor.Error} If the interest docID cannot be found.
   */
  findName(interestID) {
    this.assertDefined(interestID);
    return this.findDoc(interestID).name;
  }

  /**
   * Returns a list of AddSubtract names corresponding to the passed list of AddSubtract docIDs.
   * @param interestIDs A list of AddSubtract docIDs.
   * @returns { Array }
   * @throws { Meteor.Error} If any of the instanceIDs cannot be found.
   */
  findNames(interestIDs) {
    return interestIDs.map(interestID => this.findName(interestID));
  }

  /**
   * Throws an error if the passed name is not a defined AddSubtract name.
   * @param name The name of an interest.
   */
  assertName(name) {
    this.findDoc(name);
  }

  /**
   * Throws an error if the passed list of names are not all AddSubtract names.
   * @param names An array of (hopefully) AddSubtract names.
   */
  assertNames(names) {
    _.each(names, name => this.assertName(name));
  }

  /**
   * Returns the docID associated with the passed AddSubtract name, or throws an error if it cannot be found.
   * @param { String } name An interest name.
   * @returns { String } The docID associated with the name.
   * @throws { Meteor.Error } If name is not associated with an AddSubtract.
   */
  findID(name) {
    return (this.findDoc(name)._id);
  }

  /**
   * Returns the docIDs associated with the array of AddSubtract names, or throws an error if any name cannot be found.
   * If nothing is passed, then an empty array is returned.
   * @param { String[] } names An array of interest names.
   * @returns { String[] } The docIDs associated with the names.
   * @throws { Meteor.Error } If any instance is not an AddSubtract name.
   */
  findIDs(names) {
    return (names) ? names.map((instance) => this.findID(instance)) : [];
  }

  /**
   * Returns an object representing the AddSubtract docID in a format acceptable to define().
   * @param docID The docID of an AddSubtract.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const name = doc.name;
    const description = doc.description;
    return { name, description };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const AddSubtract = new AddSubtractCollection();

