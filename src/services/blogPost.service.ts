import { BlogPostRepository } from "../repositories/blogPost.repository";
import { BlogPostRecord, BlogPostUserInputCreate, BlogPostUserInputEdit } from "../repositories/interfaces/blogPost.record";
import { ServiceResponse } from "../repositories/types/serviceResponse";
import { UserRepository } from "../repositories/user.repository";
import { BlogPostValidation } from "./validations/blogPostValidations";


type BlogPostServiceResponse<T> = ServiceResponse<T>; 

export interface BlogPostService {
  create(blogPost: BlogPostUserInputCreate, categoryIds: number[]): Promise<BlogPostServiceResponse<BlogPostRecord>>;
  getAll(): Promise<BlogPostServiceResponse<BlogPostRecord[]>>
  update(postId: string, updateData: BlogPostUserInputEdit): Promise<BlogPostServiceResponse<BlogPostRecord>>
}

export default class BlogPostServiceImpl implements BlogPostService {
  constructor(
    private blogPostRepository: BlogPostRepository,
    private userRepository: UserRepository,
    private blogPostValidation: BlogPostValidation,
    ) {}
  
  async getAll(): Promise<BlogPostServiceResponse<BlogPostRecord[]>> {
    const blogPosts = await this.blogPostRepository.getAll();
    return { type: 'OK', data: blogPosts };
  }

  async update(postId: string, updateData: BlogPostUserInputEdit):
  Promise<BlogPostServiceResponse<BlogPostRecord>> {
    const error = this.blogPostValidation.updateValidation(updateData);
    if (error.type) return error;

    await this.blogPostRepository.update(updateData, Number(postId));

    const foundPost = await this.blogPostRepository.getById(Number(postId));
    if (!foundPost) return { type: 'NOT_FOUND', data: { message: 'Blog post not found'} };
    
    return { type: 'OK', data: foundPost};
  }

  async create(blogPost: BlogPostUserInputCreate, categoryIds: number[]):
  Promise<BlogPostServiceResponse<BlogPostRecord>> {
    const error = this.blogPostValidation.createValidation(blogPost, categoryIds);
    if (error.type) return error;

    const blogPostInput = { ...blogPost, published: new Date(), updated: new Date() };

    const createBlogPost = await this.blogPostRepository.create(blogPostInput, categoryIds);
    return { type: 'CREATED', data: createBlogPost };
  }
}