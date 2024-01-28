import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // // Initialize roles
  // if (Meteor.roles.find().count() === 0) {
  //   Meteor.roles.insert({ name: 'admin' });
  //   Meteor.roles.insert({ name: 'borrower' });
  //   Meteor.roles.insert({ name: 'lender' });
  // }

  // // Initialize admin user
  // if (Meteor.users.find().count() === 0) {
  //   const adminUserId = Accounts.createUser({
  //     email: 'admin@example.com',
  //     password: 'admin123',
  //   });
  //   Roles.addUsersToRoles(adminUserId, 'admin');
  // }
});

// Meteor.publish('loans', function () {
//   return Loans.find();
// });

// Meteor.publish('payments', function () {
//   return Payments.find();
// });