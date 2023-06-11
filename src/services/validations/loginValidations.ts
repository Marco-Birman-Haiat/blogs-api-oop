import { UserEntity } from "../../repositories/entities/user.entity";
import { ValidationResponse } from "../../repositories/types/validationResponse";
import { UserRepository } from "../../repositories/user.repository";
import { LoginData } from "../login.service";

export interface LoginValidation {
  validateLogin(loginInput: LoginData): Promise<ValidationResponse<UserEntity>>;
}

export default class LoginValidationImpl implements LoginValidation {
  constructor(private userRepository: UserRepository) {}

  async validateLogin(loginData: LoginData): Promise<ValidationResponse<UserEntity>> {
    const { email, password } = loginData;
    const foundUser = await this.userRepository.getByEmail(email);

    if (!foundUser || password !== foundUser.password) {
      return { type: 'UNATHORIZED', data: { message: 'email and/or password incorrect' } };
    }
    return { type: null, data: foundUser };
  }
}