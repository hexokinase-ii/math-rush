/* eslint prefer-arrow-callback: "off", no-unused-expressions: "off" */
/* eslint-env mocha */

import { Game1Players } from '/imports/api/game1/Game1Collection';
// import { Interests } from '/imports/api/interest/InterestCollection';
import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { removeAllEntities } from '/imports/api/base/BaseUtilities';

if (Meteor.isServer) {
  describe('Game1Collection', function testSuite() {
    const username = 'lil pump';
    const score = 99;
    const defineObject = { username, score };

    // before(function setup() {
    //   removeAllEntities();
    //   // Define a sample interest.
    //   Interests.define({ name: interestName, description: interestDescription });
    // });

    after(function teardown() {
      removeAllEntities();
    });

    it('#define, #isDefined, #removeIt, #dumpOne, #restoreOne', function test() {
      let docID = Game1Players.define(defineObject);
      expect(Game1Players.isDefined(docID)).to.be.true;
      // Check that fields are available
      const doc = Game1Players.findDoc(docID);
      const doc = Game1Players.findDoc(docID);
      expect(doc.username).to.equal(username);
      expect(doc.score).to.equal(score);
      // Check that multiple definitions with the same email address fail
      expect(function foo() { Game1Players.define(defineObject); }).to.throw(Error);
      // Check that we can dump and restore a Profile.
      const dumpObject = Game1Players.dumpOne(docID);
      Game1Players.removeIt(docID);
      expect(Game1Players.isDefined(docID)).to.be.false;
      docID = Game1Players.restoreOne(dumpObject);
      expect(Game1Players.isDefined(docID)).to.be.true;
      Game1Players.removeIt(docID);
    });

    // it('#define (illegal interest)', function test() {
    //   const illegalInterests = ['foo'];
    //   const defineObject2 = { firstName, lastName, username, bio, interests: illegalInterests, picture, title,
    //     github, facebook, instagram };
    //   expect(function foo() { Game1Players.define(defineObject2); }).to.throw(Error);
    // });
    //
    // it('#define (duplicate interests)', function test() {
    //   const duplicateInterests = [interestName, interestName];
    //   const defineObject3 = { firstName, lastName, username, bio, interests: duplicateInterests, picture, title,
    //     github, facebook, instagram };
    //   expect(function foo() { Game1Players.define(defineObject3); }).to.throw(Error);
    // });
  });
}

