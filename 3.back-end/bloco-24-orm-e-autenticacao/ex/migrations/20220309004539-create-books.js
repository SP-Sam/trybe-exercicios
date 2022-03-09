'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const BooksTable = queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        field: 'page_quantity'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });

    return BooksTable;
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.dropTable('Books');
  }
};
