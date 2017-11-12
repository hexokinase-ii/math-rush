import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Will probably need the 2 things below later

// FlowRouter.route('/', {
//   name: 'Home_Page',
//   action() {
//     BlazeLayout.render('App_Body', { main: 'Home_Page' });
//   },
// });

// FlowRouter.route('/stuff/:_id', {
//   name: 'Edit_Stuff_Page',
//   action() {
//     BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
//   },
// });

FlowRouter.route('/', {
  name: 'Home_Page_Filler',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page_Filler' });
  },
});


FlowRouter.route('/leaderboard-page', {
  name: 'Leaderboard_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Leaderboard_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
