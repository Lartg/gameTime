'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      players: {
        type: Sequelize.INTEGER
      },
      seats: {
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: { // Explicitly tells Sequelize to create a foreign key relation with `Users`.`id`
          model: 'Users',
          key: 'id',
        },
        field: 'UserId', // Explicitly tells Sequelize the database field name
      },
      GameId: {
        allowNull: false,
        type: Sequelize.BIGINT,
        references: { // Explicitly tells Sequelize to create a foreign key relation with `Users`.`id`
          model: 'Games',
          key: 'id',
        },
        field: 'GameId' // Explicitly tells Sequelize the database field name
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};