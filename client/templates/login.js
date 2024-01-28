import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

import './login.html';

import './dashboard.html';
import './dashboard.js';

Template.login.events({
    'submit form': function(e) {
        e.preventDefault();
        var emailVar = e.target.loginEmail.value;
        var passwordVar = e.target.loginPassword.value;
        console.log("Form submitted.");
        Meteor.loginWithPassword(emailVar, passwordVar);
        Router.go('/dashboard');
    }
});