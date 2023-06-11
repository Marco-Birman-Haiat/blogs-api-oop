import { Model, DataTypes, Sequelize } from 'sequelize';

import db from '.';
import BlogPostModel from './blogPost.model';
import CategoryModel from './category.model';
import BlogPostCategoryModel from './blogPostCategory.model';

const sequelize = db;

class UserModel extends Model {}

UserModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
    image: { type: DataTypes.STRING},
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'users'
  }
)

UserModel.hasMany(BlogPostModel, { as: 'blog_posts', foreignKey: 'userId' });
BlogPostModel.belongsTo(UserModel, { as: 'user', foreignKey: 'userId' });

BlogPostModel.belongsToMany(CategoryModel, {
  as: 'categories',
  through: BlogPostCategoryModel,
  foreignKey: 'postId',
  otherKey: 'categoryId',
});

CategoryModel.belongsToMany(BlogPostModel, {
  as: 'posts',
  through: BlogPostCategoryModel,
  foreignKey: 'categoryId',
  otherKey: 'postId',
});

export default UserModel;
