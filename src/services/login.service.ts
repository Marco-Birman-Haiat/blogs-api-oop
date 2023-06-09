import { UserEntity } from "../repositories/entities/user.entity";
import { ServiceResponse } from "../repositories/types/serviceResponse";
import { UserRepository } from "../repositories/user.repository";
import { JwtAuthorization } from "../utils/authFunctions";

type LoginData = {
  email: string;
  password: string;
}

type LoginServiceResponse<T> = ServiceResponse<T>;

export interface LoginService {
  login(loginData: LoginData): Promise<LoginServiceResponse<string>>
}

export default class LoginServiceImpl implements LoginService {
  constructor(
    private userRepository: UserRepository,
    private Authorization: JwtAuthorization
  ) {}

  async login(loginData: LoginData): Promise<LoginServiceResponse<string>> {
    const verification = await this.loginAuthorization(loginData);
    if (verification.type === 'UNATHORIZED') return verification;

    const foundUser = verification.data as UserEntity; // porque preciso colocar isso aqui?
    const token = this.Authorization.createToken({ id: foundUser.id, email: foundUser.email });

    return { type: 'OK', data: token };
  }

  private async loginAuthorization(loginData: LoginData):
  Promise<LoginServiceResponse<UserEntity>> {
    const { email, password } = loginData;
    const foundUser = await this.userRepository.getByEmail(email);

    if (!foundUser || password !== foundUser.password) {
      return { type: 'UNATHORIZED', data: { message: 'email and/or password incorrect' } };
    }
    return { type: 'OK', data: foundUser };
  }
}