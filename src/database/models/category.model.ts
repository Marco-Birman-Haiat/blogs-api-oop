import { Model, DataTypes, Sequelize } from 'sequelize';

import db from '.';

const sequelize = db;

class CategoryModel extends Model {}

CategoryModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING},
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'categories'
  }
)

export default CategoryModel;
