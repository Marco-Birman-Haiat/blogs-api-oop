import { Transaction } from "sequelize";
import db from "../database/models";
import BlogPostModel from "../database/models/blogPost.model";
import BlogPostCategoryModel from "../database/models/blogPostCategory.model";
import CategoryModel from "../database/models/category.model";
import UserModel from "../database/models/user.model";
import { BlogPostInput, BlogPostRecord, BlogPostUserInputEdit } from "./interfaces/blogPost.record";
import { Op } from "sequelize";

export interface BlogPostRepository {
  getAll(): Promise<BlogPostRecord[]>;
  getById(postId: number): Promise<BlogPostRecord | null>;
  create(blogPost: BlogPostInput, categoryIds: number[]): Promise<BlogPostRecord>;
  update(blogPost: BlogPostUserInputEdit, postId: number): Promise<void>;
  search(searchTerm: string): Promise<BlogPostRecord[]>;
}

export default class BlogPostRepositoryImpl implements BlogPostRepository {
  async getAll(): Promise<BlogPostRecord[]> {
    const allPosts = await BlogPostModel.findAll({
      include: [
        { model: UserModel, as: 'user', attributes: { exclude: ['password'] } },
        { model: CategoryModel, as: 'categories' },
      ]
    });

    return allPosts.map((post) => post.dataValues);
  }

  async getById(postId: number): Promise<BlogPostRecord | null> {
    const foundPost = await BlogPostModel.findByPk(postId, {
      include: [
        { model: UserModel, as: 'user', attributes: { exclude: ['password'] } },
        { model: CategoryModel, as: 'categories' },
      ]
    });

    if (!foundPost) return null;
    return foundPost.dataValues;
  }

  async create(blogPost: BlogPostInput, categoryIds: number[]): Promise<BlogPostRecord> {
    const createdBlogPost = await db.transaction(async (blogPostCreateTransaction) => {
      const createBlogPost = await this.insertBlogPost(blogPost, blogPostCreateTransaction);
      await this.insertBlogPostCategories(categoryIds, createBlogPost, blogPostCreateTransaction);

      return createBlogPost;
    });
    return createdBlogPost.dataValues;
  }

  async update(blogPost: BlogPostUserInputEdit, postId: number): Promise<void> {
    await BlogPostModel.update(blogPost, { where: { id: postId } });
  }

  async search(searchTerm: string): Promise<BlogPostRecord[]> {
    const foundPosts = await BlogPostModel.findAll({
      include: [
        { model: UserModel, as: 'user', attributes: { exclude: ['password'] } },
        { model: CategoryModel, as: 'categories' },
      ],
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${searchTerm}%` } },
          { content: { [Op.like]: `%${searchTerm}%` } },
        ]
      }
    });
    return foundPosts.map((post) => post.dataValues);
  }

  private async insertBlogPostCategories(categoryIds: number[], createdPost: BlogPostModel, transaction: Transaction) {
    const blogPostCategoryInsertData = categoryIds.map((categoryId) => ({
        categoryId,
        postId: createdPost.dataValues.id
      }));
      await BlogPostCategoryModel.bulkCreate(
        blogPostCategoryInsertData,
        { transaction }
      );
  }

  private async insertBlogPost(blogPost: BlogPostInput, transaction: Transaction): Promise<BlogPostModel> {
    const createBlogPost = await BlogPostModel
      .create(blogPost, { transaction });
    return createBlogPost;
  }

  private getRecordFromModel(entity: BlogPostModel): BlogPostRecord {
    return {
      id: entity.dataValues.id,
      title: entity.dataValues.title,
      content: entity.dataValues.content,
      published: entity.dataValues.published,
      updated: entity.dataValues.updated,
      user: entity.dataValues.user,
      categories: entity.dataValues.categories,
    };
  }
}