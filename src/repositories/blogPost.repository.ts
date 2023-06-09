import BlogPostModel from "../database/models/blogPost.model";
import UserModel from "../database/models/user.model";
import { BlogPostInput, BlogPostRecord } from "./interfaces/blogPost.record";

export interface BlogPostRepository {
  getAll(): Promise<BlogPostRecord[]>;
  create(blogPost: BlogPostInput): Promise<BlogPostRecord>;
}

export default class BlogPostRepositoryImpl implements BlogPostRepository {
  async getAll(): Promise<BlogPostRecord[]> {
    const allPosts = await BlogPostModel.findAll({
      include: { model: UserModel, as: 'user', attributes: { exclude: ['password'] } }
    });

    return allPosts.map((blogPost) => this.getRecordFromModel(blogPost))
  }

  async create(blogPost: BlogPostInput): Promise<BlogPostRecord> {
    const createBlogPost = await BlogPostModel.create()
    return this.getRecordFromModel(createBlogPost);
  }

  private getRecordFromModel(entity: BlogPostModel): BlogPostRecord {
    return {
      id: entity.dataValues.id,
      title: entity.dataValues.title,
      user: entity.dataValues.user,
      content: entity.dataValues.content,
      published: entity.dataValues.published,
      updated: entity.dataValues.updated,
    };
  }
}