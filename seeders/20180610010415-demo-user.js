'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Ryan',
        middleName: 'William',
        lastName: 'Berkowitz',
        email: 'ryan@berkowitz.io',
        birthDay: 31,
        birthMonth: 10,
        birthYear: 1990,
        height: 183,
        weight: 95
      },
      {
        firstName: 'Andrew',
        middleName: 'Nicholas',
        lastName: 'Sipes',
        email: 'andrew@sipes.io',
        birthDay: 27,
        birthMonth: 4,
        birthYear: 1995,
        height: 175,
        weight: 104
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
