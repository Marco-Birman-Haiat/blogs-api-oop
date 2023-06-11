import { UserEntity } from "../repositories/entities/user.entity";
import { ServiceResponse } from "../repositories/types/serviceResponse";
import { UserRepository } from "../repositories/user.repository";
import { JwtAuthorization } from "../utils/authFunctions";
import { LoginValidation } from "./validations/loginValidations";

export type LoginData = {
  email: string;
  password: string;
}

type LoginServiceResponse<T> = ServiceResponse<T>;

export interface LoginService {
  login(loginData: LoginData): Promise<LoginServiceResponse<string>>
}

export default class LoginServiceImpl implements LoginService {
  constructor(
    private loginValidation: LoginValidation,
    private Authorization: JwtAuthorization
  ) {}

  async login(loginData: LoginData): Promise<LoginServiceResponse<string>> {
    const verification = await this.loginValidation.validateLogin(loginData);
    if (verification.type) return verification;

    const foundUser = verification.data as UserEntity; // porque preciso colocar isso aqui?
    const token = this.Authorization.createToken({ id: foundUser.id, email: foundUser.email });

    return { type: 'OK', data: token };
  }
}