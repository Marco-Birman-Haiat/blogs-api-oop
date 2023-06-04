import { UserEntity } from "./entities/user.entity";
import UserRecord, { UserInput } from "./interfaces/user.record";


export interface UserRepository {
  getAll(): Promise<UserRecord[]>;
  create(user: UserInput): Promise<UserRecord>;
  getByEmail(email: string): Promise<UserRecord | null>;
  delete(id: number): Promise<void>;
}

export class UserRepositoryInMemoryImpl implements UserRepository {
  private users: UserEntity[] = [];

  async getAll(): Promise<UserRecord[]> {
    return this.users.map((user) => this.getRecordFromEntity(user))
  }

  async getByEmail(email: string): Promise<UserRecord | null> {
    const foundUser = this.users.filter((user) => user.email == email);
    
    if (!foundUser.length) return null

    return this.getRecordFromEntity(foundUser[0]);
  }

  async create(user: UserInput): Promise<UserRecord> {
    const newId = this.getNewIndex();
    const userToCreate = {...user, id: newId };
    
    this.users.push(userToCreate);
    return this.getRecordFromEntity(userToCreate);
  }

  async delete(id: number): Promise<void> {
    const filteredUsers = this.users.filter((user) => user.id !== id);
    this.users = filteredUsers;
  }

  getNewIndex(): number {
    if (!this.users.length) return 1;

    const largestId = this.users.reduce((acc, user) => {
      if (user.id > acc) return user.id;
      return acc
    }, this.users[0].id);

    return largestId + 1;
  }

  private getRecordFromEntity(entity: UserEntity): UserRecord {
    return {
      displayName: entity.displayName,
      email: entity.email,
      image: entity.image,
      id: entity.id,
    };
  }

}

