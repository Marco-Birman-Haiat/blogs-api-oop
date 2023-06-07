import { Model, DataTypes, ModelDefined, Optional, Sequelize } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

import db from './index';
import { UserEntity } from '../../repositories/entities/user.entity';

export type UserInputtableFields = Optional<UserEntity, 'id'>;

type UserSequelizeModelCreator = ModelDefined<UserEntity, UserInputtableFields>;


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
  }
)

export default UserModel;
