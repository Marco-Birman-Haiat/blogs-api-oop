'use strict';

import { QueryInterface, DataTypes } from "sequelize";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('posts_categories', {
      postId: {
        type: DataTypes.INTEGER,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    })
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('posts_categories');
  }
};
