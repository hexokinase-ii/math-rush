import { Template } from 'meteor/templating';

Template.type_1_game.onCreated(function onCreated() {
  this.subscribe();
});
let num1;
let num2;
let answer;
Template.type_1_game.helpers({
  initializevalues(n1, n2, answ) {
    num1 = n1;
    num2 = n2;
    answer = answ;
    console.log(answ);
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
  'submit .check-answer'(event) {
    event.preventDefault();
    if (num1 + num2 === answer) {
      console.log('num1+num2 = answer');
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
