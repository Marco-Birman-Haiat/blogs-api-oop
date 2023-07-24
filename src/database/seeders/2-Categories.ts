import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('categories',
      [
        {
          id: 1,
          name: 'Inovação',
        },
        {
          id: 2,
          name: 'Escola',
        },
      ], { });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('categories', {});
  },
};
