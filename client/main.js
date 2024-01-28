import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Router } from 'meteor/iron:router';

import './main.html';

import './templates/dashboard.html';
import './templates/dashboard.js';
import './templates/home.html';
import './templates/home.js';

Router.map(function() {
    this.route('login');
    this.route('register');
    this.route('home', {
        path: '/'
    });
    this.route('dashboard');
});

Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY',
});

Template.registerHelper('isAdmin', () => {
    const user = Meteor.user();
    return user && user.profile && user.profile.role === 'admin';
});

Template.registerHelper('isBorrower', () => {
    const user = Meteor.user();
    return user && user.profile && user.profile.role === 'borrower';
});

Template.registerHelper('isLender', () => {
    const user = Meteor.user();
    return user && user.profile && user.profile.role === 'lender';
});