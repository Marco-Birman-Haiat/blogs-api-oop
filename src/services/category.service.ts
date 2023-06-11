import { CategoryRepository } from "../repositories/category.repository";
import { CategoryInput, CategoryRecord } from "../repositories/interfaces/category.record";
import { ServiceResponse } from "../repositories/types/serviceResponse";

type CategoryServiceResponse<T> = ServiceResponse<T>;

export interface CategoryService {
  getAll(): Promise<CategoryServiceResponse<CategoryRecord[]>>;
  getById(id: number): Promise<CategoryServiceResponse<CategoryRecord>>;
  create(category: CategoryInput): Promise<CategoryServiceResponse<CategoryRecord>>;
}

export class CategoryServiceImpl implements CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getAll(): Promise<CategoryServiceResponse<CategoryRecord[]>> {
    const allCategories = await this.categoryRepository.getAll();
    
    return  { type: 'OK', data: allCategories };
  }

  async getById(id: number): Promise<CategoryServiceResponse<CategoryRecord>> {
    const foundCategory = await this.categoryRepository.getById(id);

    if (!foundCategory) return { type: 'NOT_FOUND', data: { message: 'category not found' } };
    return { type: 'OK', data: foundCategory }
  }

  async create(category: CategoryInput): Promise<CategoryServiceResponse<CategoryRecord>> {
    const createdCategory = await this.categoryRepository.create(category);
    
    return { type: 'CREATED', data: createdCategory };
  }
}