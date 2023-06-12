import UserRecord, { UserInput } from "../repositories/interfaces/user.record";
import { ServiceResponse } from "../repositories/types/serviceResponse";
import { UserRepository } from "../repositories/user.repository";
import { UserValidation } from "./validations/userValidations";

type UserServiceResponse<T> = ServiceResponse<T>;

export interface UserService {
  getAll(): Promise<UserServiceResponse<UserRecord[]>>;
  getById(id: string): Promise<UserServiceResponse<UserRecord>>;
  create(user: UserInput): Promise<UserServiceResponse<UserRecord>>;
  getByEmail(email: string): Promise<UserServiceResponse<UserRecord>>
  delete(id: number): Promise<UserServiceResponse<null>>;
}


export class UserServiceImpl implements UserService {
  constructor(private userRepository: UserRepository, private userValidation: UserValidation) {}

  async getAll(): Promise<UserServiceResponse<UserRecord[]>> {
    const allUsers = await this.userRepository.getAll();
    return { type: 'OK', data: allUsers };
  }

  async getById(id: string): Promise<UserServiceResponse<UserRecord>> {
    const foundUser = await this.userRepository.getById(Number(id));

    if(!foundUser) return { type: 'NOT_FOUND', data: { message: 'user not found' } };
    return { type: 'OK', data: foundUser };
  }

  async getByEmail(email: string): Promise<UserServiceResponse<UserRecord>> {
    const foundUser = await this.userRepository.getByEmail(email);

    if(!foundUser) return { type: 'NOT_FOUND', data: { message: 'user not found' } };
    return { type: 'OK', data: foundUser };
  }

  async delete(id: number): Promise<UserServiceResponse<null>> {
    await this.userRepository.delete(id);
    return { type: 'OK', data: null };
  }

  async create(user: UserInput): Promise<UserServiceResponse<UserRecord>> {
    const error = await this.userValidation.validateCreate(user)
    if (error.type) return error;
    
    const createdUser = await this.userRepository.create(user);
    return { type: 'CREATED', data: createdUser };
  }
}