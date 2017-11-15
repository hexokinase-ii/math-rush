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
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

<<<<<<< HEAD
FlowRouter.route('/home-page', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/user-profile-page', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

=======
>>>>>>> issue-05
FlowRouter.route('/game-types-page', {
  name: 'Game_Types_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Game_Types_Page' });
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