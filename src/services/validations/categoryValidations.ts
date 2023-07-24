import { CategoryRepository } from "../../repositories/category.repository";
import { CategoryInput } from "../../repositories/interfaces/category.record";
import { ValidationResponse } from "../../repositories/types/validationResponse";

export interface CategoryValidation {
  categoryCreate(category: CategoryInput): ValidationResponse<string>;
  categortIds(categoryIds: number[]): Promise<ValidationResponse<string>>;
}

export default class CategoryValidationImpl implements CategoryValidation {
  constructor(private categoryRepository: CategoryRepository) {}
  
  categoryCreate(category: CategoryInput): ValidationResponse<string> {
    return { type: null, data: '' };
  }

  async categortIds(categoryIds: number[]): Promise<ValidationResponse<string>> {
    const idsFoundArray = await Promise.all(categoryIds.map(async (id) => {
      return this.categoryRepository.getById(id);
    }));

    if (idsFoundArray.some((result) => !result)) {
      return { type: 'UNPROCESSABLE_DATA', data: { message: 'one or more "categoryIds" not found'} };
    }
    return { type: null, data: '' };
  }
}