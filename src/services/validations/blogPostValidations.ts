import { schema } from "../../database/config/database";
import { BlogPostInput, BlogPostUserInputCreate, BlogPostUserInputEdit } from "../../repositories/interfaces/blogPost.record";
import { CategoryInput } from "../../repositories/interfaces/category.record";
import { ValidationResponse, ValidationResponseError } from "../../repositories/types/validationResponse";
import { CategoryValidation } from "./categoryValidations";
import { createBlogPostSchema, updateBlogPostSchema } from "./schemas";

export interface BlogPostValidation {
  updateValidation(blogPost: BlogPostUserInputEdit): ValidationResponse<string>;
  createValidation(blogPost: BlogPostUserInputCreate, categoryIds: number[]): ValidationResponse<string>;
}

export default class BlogPostValidationImpl implements BlogPostValidation {
  constructor(private categoryValidation: CategoryValidation) {}
  
  updateValidation(blogPost: BlogPostUserInputEdit):
  ValidationResponse<string> {
    try {
      this.validateUpdateSchema(blogPost);
    } catch (error) {
      return error as ValidationResponseError;
    }
    return { type: null, data: '' };
  }

  createValidation(blogPost: BlogPostUserInputCreate, categoryIds: number[]):
  ValidationResponse<string> {
    try {
      this.validateCreateSchema(blogPost, categoryIds);
      this.categoryValidation.categortIds(categoryIds);
    } catch (error) {
      return error as ValidationResponseError;
    }
    return { type: null, data: '' };
  }

  private validateCreateSchema(blogPost: BlogPostUserInputCreate, categoryIds: number[]): void {
    const { title, content } = blogPost;
    
    const { error: schemaError } = createBlogPostSchema.validate({ title, content, categoryIds });

    if (schemaError) throw { type: 'UNPROCESSABLE_DATA', data: { message: schemaError.message } };
  }

  private validateUpdateSchema(blogPost: BlogPostUserInputEdit): void {
    const { error: schemaError } = updateBlogPostSchema.validate(blogPost);

    if (schemaError) throw { type: 'UNPROCESSABLE_DATA', data: { message: schemaError.message } };
  }
}