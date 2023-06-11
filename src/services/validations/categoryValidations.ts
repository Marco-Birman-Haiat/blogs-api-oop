import { CategoryInput } from "../../repositories/interfaces/category.record";
import { ValidationResponse } from "../../repositories/types/validationResponse";

export interface CategoryValidation {
  categoryCreate(category: CategoryInput): ValidationResponse<string>;
}

export default class CategoryValidationImpl implements CategoryValidation {
  categoryCreate(category: CategoryInput): ValidationResponse<string> {
    return { type: null, data: '' };
  }
}