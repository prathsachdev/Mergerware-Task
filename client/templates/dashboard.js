import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import './dashboard.html';

import './home.html';
// import './loans.html';
// import './payments.html';
import './home.js';
// import './loans.js';
// import './payments.js';

Template.home.events({
    'click #logout'(event) {
        event.preventDefault();
        Meteor.logout();
        // Router.go('/');
    }
});

// Template.dashboard.helpers({
//     isBorrower() {
//         return Roles.userIsInRole(Meteor.userId(), 'borrower');
//     },
//     loans() {
//         return Loans.find();
//     },
//     payments() {
//         return Payments.find();
//     }
// });