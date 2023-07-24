import { DataTypes, Model } from "sequelize";

import db from ".";
import BlogPostModel from "./blogPost.model";
import CategoryModel from "./category.model";

const sequelize = db;

class BlogPostCategoryModel extends Model {}

BlogPostCategoryModel.init(
  {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.STRING, primaryKey: true }
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'posts_categories'
  }
)

export default BlogPostCategoryModel;
