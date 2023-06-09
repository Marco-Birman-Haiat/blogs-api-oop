import { Model, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes } from 'sequelize';

import db from '.';
import UserModel from './user.model';
const sequelize = db;

class BlogPostModel extends Model {
  // declare id: number;
  // declare title: string;
  // declare content: string;
  // declare userId: ForeignKey<number>;
  // declare published: Date;
  // declare updated: Date;
}


BlogPostModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'blog_posts'
  }
)

export default BlogPostModel;
