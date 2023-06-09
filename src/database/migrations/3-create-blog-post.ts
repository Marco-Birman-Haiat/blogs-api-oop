'use strict';

import { Model, DataTypes, QueryInterface } from 'sequelize';
import { BlogPostEntity } from '../../repositories/entities/blogPost.entity';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<BlogPostEntity>>('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('blog_posts')
  }
};
