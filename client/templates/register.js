import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './register.html';

Template.register.events({
    'submit form': function(e) {
        e.preventDefault();
        var emailVar = e.target.registerEmail.value;
        var passwordVar = e.target.registerPassword.value;
        console.log("Form submitted");
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
});