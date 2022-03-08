'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.bulkInsert('Stores', [
      {
        name: 'Loja 1',
        description: 'Loja de Games'
      },
      {
        name: 'Loja 2',
        description: 'Loja de Brinquedos'
      },
      {
        name: 'Loja 3',
        description: 'Loja de Móveis'
      }
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
