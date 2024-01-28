import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './payments.html';

Template.payments.onCreated(function () {
    this.subscribe('payments');
});