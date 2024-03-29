import { QueryInterface } from 'sequelize';
import bcrypt from 'bcrypt';

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert('users',
      [{
        id: 1,
        display_name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
      },
      {
        id: 2,
        display_name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
      },
      ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
