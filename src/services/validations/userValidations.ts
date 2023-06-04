import { UserInput } from "../../repositories/interfaces/user.record";
import { ValidationResponse, ValidationResponseError } from "../../repositories/types/validationResponse";
import { ValidationImpl } from "./Validation";
import { userCreateSchema } from "./schemas";

export interface UserValidation {
  validateCreate(received: UserInput): ValidationResponse;
  validateCreateRequest(received: {}): void;
  validateCreateInput(userInput: {}): void;
}

export class UserValidationImpl implements UserValidation {
  USER_INPUT = ['displayName', 'email', 'password', 'image'];
  
  
  validateCreate(received: UserInput): ValidationResponse {
    try {
      this.validateCreateRequest(received);
      this.validateCreateInput(received);
    } catch (error) {
      return error as ValidationResponseError;
    }
    return { type: null, data: ''};
  }

  validateCreateRequest(received: {}): void {
    const receivedKeys = Object.keys(received)
    
    const allKeysExistent = this.USER_INPUT.every((key) => receivedKeys.
      some((recKey) => recKey === key));
    
    if (!allKeysExistent) throw { type: 'UNPROCESSABLE_DATA', data: { message: 'there are missing fields' } };
  }

  validateCreateInput(input: {}): void {
    const { error } = userCreateSchema.validate(input);
    
    if (error) throw { type: 'UNPROCESSABLE_DATA', data: { message: error.message } };
  }
}