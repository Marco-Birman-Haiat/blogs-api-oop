// src/migrations/[timestamp]-create-employee.js

import { Model, QueryInterface, DataTypes } from 'sequelize';
import { UserEntity } from '../../repositories/entities/user.entity';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<UserEntity>>('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'display_name',
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email',
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};
