import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('blog_posts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          content: 'Melhor post do ano',
          user_id: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          content: 'Foguete não tem ré',
          user_id: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
      ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('blog_posts', {});
  },
};
