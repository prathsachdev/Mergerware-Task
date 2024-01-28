import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './loans.html';

Template.loans.events({
    'click .requestLoan'(event) {
        event.preventDefault();
        const amount = parseFloat(prompt('Enter loan amount:'));
        if (!isNaN(amount)) {
        Loans.insert({ amount, status: 'Pending' });
        }
    }
});

Template.loans.onCreated(function () {
    this.subscribe('loans');
});