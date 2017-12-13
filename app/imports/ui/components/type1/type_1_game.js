import { Template } from 'meteor/templating';
import { AddSubtract } from '../../../api/addsubtract/AddSubtractCollection';

Template.type_1_game.onCreated(function onCreated() {
  this.subscribe(AddSubtract.getPublicationName());
});

let addSub;

Template.type_1_game.helpers({
  initializevalues: function (addsub) {
    addSub = addsub;
    return true;
  },
});

// Template.Filter_Page.onCreated(function onCreated() {
//   this.subscribe(Interests.getPublicationName());
//   this.subscribe(Profiles.getPublicationName());
//   this.messageFlags = new ReactiveDict();
//   this.messageFlags.set(selectedInterestsKey, undefined);
// });

Template.type_1_game.event({
  'click .check-answer'(event) {

    const answer = event.target.Answer.value;
    console.log(answer);
    console.log(addSub.answer);
    if (answer == addSub.answer) {
      console.log('We did it: num1+num2 = ');
      console.log(addSub.userAnswer);
    }
  },
});

// Template.Filter_Page.events({
//   'submit .filter-data-form'(event, instance) {
//     event.preventDefault();
//     const selectedOptions = _.filter(event.target.Interests.selectedOptions, (option) => option.selected);
//     instance.messageFlags.set(selectedInterestsKey, _.map(selectedOptions, (option) => option.value));
//   },
// });
