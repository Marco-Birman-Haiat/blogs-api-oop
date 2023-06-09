'use strict';

import { QueryInterface, DataTypes, Model } from 'sequelize';
import { CategoryEntity } from '../../repositories/entities/ category.entity';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<CategoryEntity>>('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('categories');
  }
};
