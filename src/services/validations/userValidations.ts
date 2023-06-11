import { UserInput } from "../../repositories/interfaces/user.record";
import { ValidationResponse, ValidationResponseError } from "../../repositories/types/validationResponse";
import { UserRepository } from "../../repositories/user.repository";
import { userCreateSchema } from "./schemas";

export interface UserValidation {
  validateCreate(received: UserInput): Promise<ValidationResponse<string>>;
}

export class UserValidationImpl implements UserValidation {
  // USER_INPUT = ['displayName', 'email', 'password', 'image'];

  constructor(private userRepository: UserRepository) {}
  
  
  async validateCreate(received: UserInput): Promise<ValidationResponse<string>> {
    try {
      this.validateCreateInput(received);
      await this.validateEmailInUse(received.email);
      // this.validateCreateRequest(received);
    } catch (error) {
      return error as ValidationResponseError;
    }
    return { type: null, data: ''};
  }

  
  private async validateEmailInUse(receivedEmail: string): Promise<void> {
    const emailExists = await this.userRepository.getByEmail(receivedEmail);
    
    if (emailExists !== null) throw { type: 'CONFLICT', data: { message: 'Email already in use' } };
    return;
  }
  
  private validateCreateInput(input: {}): void {
    const { error } = userCreateSchema.validate(input);
    
    if (error) throw { type: 'UNPROCESSABLE_DATA', data: { message: error.message } };
  }

  // private validateCreateRequest(received: {}): void {
  //   const receivedKeys = Object.keys(received)
    
  //   const allKeysExistent = this.USER_INPUT.every((key) => receivedKeys.
  //     some((recKey) => recKey === key));
    
  //   if (!allKeysExistent) throw { type: 'UNPROCESSABLE_DATA', data: { message: 'there are missing fields' } };
  // }
}