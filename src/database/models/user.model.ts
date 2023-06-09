import { Model, DataTypes, Sequelize } from 'sequelize';

import db from '.';
import BlogPostModel from './blogPost.model';

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

export default UserModel;
