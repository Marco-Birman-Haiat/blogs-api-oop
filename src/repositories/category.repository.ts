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
    return this.categories.map((cat) => this.getRecordFromEntity(cat));
  }

  async getById(id: number): Promise<CategoryRecord | null> {
    const foundCategory = this.categories.filter((category) => category.id === id);

    if (!foundCategory.length) return null;
    return this.getRecordFromEntity(foundCategory[0]);
  }

  async create(category: CategoryInput): Promise<CategoryRecord> {
    const newCategoryId = this.getNewIndex();
    const categoryToBeCreated = { ...category, id: newCategoryId };

    this.categories.push(categoryToBeCreated);

    return this.getRecordFromEntity(categoryToBeCreated);
  }

  getNewIndex(): number {
    if (!this.categories.length) return 1;

    const largestId = this.categories.reduce((acc, user) => {
      if (user.id > acc) return user.id;
      return acc
    }, this.categories[0].id);

    return largestId + 1;
  }

  getRecordFromEntity(entity: CategoryEntity): CategoryRecord {
    return {
      id: entity.id,
      name: entity.name,
    }
  }
}