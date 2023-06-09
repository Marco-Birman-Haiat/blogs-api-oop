import CategoryModel from "../database/models/category.model";
import { CategoryEntity } from "./entities/ category.entity";
import { CategoryInput, CategoryRecord } from "./interfaces/category.record";

export interface CategoryRepository {
  getAll(): Promise<CategoryRecord[]>;
  getById(id: number): Promise<CategoryRecord | null>;
  create(category: CategoryInput): Promise<CategoryRecord>;
}

export class CategoryRepositoryImpl implements CategoryRepository {
  private categories: CategoryRecord[] = [];

  async getAll(): Promise<CategoryRecord[]> {
    const allCategories = await CategoryModel.findAll();
    return allCategories.map((cat) => this.getRecordFromEntity(cat));
  }

  async getById(id: number): Promise<CategoryRecord | null> {
    const foundCategory = await CategoryModel.findByPk(id);

    if (!foundCategory) return null;
    return this.getRecordFromEntity(foundCategory);
  }

  async create(category: CategoryInput): Promise<CategoryRecord> {
    const createdCategory = await CategoryModel.create(category);

    return this.getRecordFromEntity(createdCategory);
  }

  getNewIndex(): number {
    if (!this.categories.length) return 1;

    const largestId = this.categories.reduce((acc, user) => {
      if (user.id > acc) return user.id;
      return acc
    }, this.categories[0].id);

    return largestId + 1;
  }

  getRecordFromEntity(entity: CategoryModel): CategoryRecord {
    return {
      id: entity.dataValues.id,
      name: entity.dataValues.name,
    }
  }
}