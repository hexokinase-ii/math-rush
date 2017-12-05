import { Template } from 'meteor/templating';
import { AddSubtract } from '/imports/api/addsubtract/AddSubtractCollection';

Template.Directory_Page.onCreated(function onCreated() {
  this.subscribe(AddSubtract.getPublicationName());
});

Template.Directory_Page.helpers({
  addsubtract() {
    console.log('calling addsubtract in game1.js');
    return AddSubtract.find();
  },
  test() {
    console.log('Helper Test');
    return 'Helper Test Print';
  },
});
