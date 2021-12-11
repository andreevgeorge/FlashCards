'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Guesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      round_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Rounds', key: 'id' }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Cards', key: 'id'}
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      firstTry: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Guesses');
  }
};
