import BlogPostModel from "../database/models/blogPost.model";
import UserModel from "../database/models/user.model";
import { UserEntity } from "./entities/user.entity";
import UserRecord, { UserInput } from "./interfaces/user.record";


export interface UserRepository {
  getAll(): Promise<UserRecord[]>;
  create(user: UserInput): Promise<UserRecord>;
  getByEmail(email: string): Promise<UserEntity | null>;
  delete(id: number): Promise<void>;
}

export default class UserRepositoryImpl implements UserRepository {
  async getAll(): Promise<UserRecord[]> {
    const allUsers = await UserModel.findAll({ include: { model: BlogPostModel, as: 'blog_posts'}});
    return allUsers.map((user) => this.getRecordFromModel(user))
  }

  async getByEmail(email: string): Promise<UserEntity | null> {
    const foundUser = await UserModel.findOne({ where: { email }});
    
    if (!foundUser) return null

    return foundUser.dataValues;
  }

  async create(user: UserInput): Promise<UserRecord> {
    const createdUser = await UserModel.create(user);
    
    return this.getRecordFromModel(createdUser);
  }

  async delete(id: number): Promise<void> {
    UserModel.destroy({ where: { id }})
  }

  private getRecordFromModel(entity: UserModel): UserRecord {
    return {
      displayName: entity.dataValues.displayName,
      email: entity.dataValues.email,
      image: entity.dataValues.image,
      id: entity.dataValues.id,
    };
  }

}

