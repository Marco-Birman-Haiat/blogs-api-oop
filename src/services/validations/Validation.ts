// import { UserInput } from "../../repositories/interfaces/user.record";
// import { ServiceResponse } from "../../repositories/types/serviceResponse";
// import { ValidationResponse } from "../../repositories/types/validationResponse";

// interface Validation {
//   validateRequest(required: string[], received: {}): ValidationResponse;
//   validateInput(userInput: UserInput): ValidationResponse;
// }

// export abstract class ValidationImpl implements Validation {
//   abstract validateInput(userInput: UserInput): ValidationResponse;

//   validateRequest(required: string[], received: {}): ValidationResponse {
//     const receivedKeys = Object.keys(received)
    
//     const allKeysExistent = required.every((key) => receivedKeys.
//       some((recKey) => recKey === key));
    
//     if (allKeysExistent) return { type: null, data: '' };
//     return { type: 'UNPROCESSABLE_DATA', data: { message: 'there are missing fields' } };
//   }

// }