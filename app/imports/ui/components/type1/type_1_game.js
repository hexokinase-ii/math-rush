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
//
//   userinput: function() {
//     console.log('userinput function');
//     const value = document.getElementById('inputField').value;
//     if(value !== addSub.answer) {
//       document.getElementById('result').innerHTML = "Try Again";
//     }
//     else{
//       document.getElementById('result').innerHTML = "Correct";
//     }
//     return true;
//   }
// });
//
// Template.type_1_game.events({
//   'click .check-answer'(event) {
//    addSub.userAnswer = event.target.value;
//    console.log(addSub.userAnswer);
//    console.log('On input');
//   },
//   'click .check-answer'(event, instance) {
//     addSub.userAnswer = event.target.value;
//     console.log(addSub.userAnswer);
//   },
//   'blur .test'(){
//     console.log('test');
//     console.log(document.getElementById('inputField').value);
//   },

});

// Template.Filter_Page.events({
//   'submit .filter-data-form'(event, instance) {
//     event.preventDefault();
//     const selectedOptions = _.filter(event.target.Interests.selectedOptions, (option) => option.selected);
//     instance.messageFlags.set(selectedInterestsKey, _.map(selectedOptions, (option) => option.value));
//   },
// });
