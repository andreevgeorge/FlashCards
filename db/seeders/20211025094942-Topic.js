'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Decks', [
    {topic: 'Space', createdAt: new Date(), updatedAt: new Date(),},
    {topic: 'Weather', createdAt: new Date(), updatedAt: new Date(),},
    {topic: 'Robots', createdAt: new Date(), updatedAt: new Date(),},
    {topic: 'Culture around the World', createdAt: new Date(), updatedAt: new Date(),},
   ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Decks', null, {});
  }
};
