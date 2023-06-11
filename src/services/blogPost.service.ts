import { BlogPostRepository } from "../repositories/blogPost.repository";
import { BlogPostRecord, BlogPostUserInput } from "../repositories/interfaces/blogPost.record";
import { ServiceResponse } from "../repositories/types/serviceResponse";
import { UserRepository } from "../repositories/user.repository";


type BlogPostServiceResponse<T> = ServiceResponse<T>; 

export interface BlogPostService {
  create(blogPost: BlogPostUserInput, categoryIds: number[]): Promise<BlogPostServiceResponse<BlogPostRecord>>;
  getAll(): Promise<BlogPostServiceResponse<BlogPostRecord[]>>
}

export default class BlogPostServiceImpl implements BlogPostService {
  constructor(private blogPostRepository: BlogPostRepository, private userRepository: UserRepository) {}
  
  async getAll(): Promise<BlogPostServiceResponse<BlogPostRecord[]>> {
    const blogPosts = await this.blogPostRepository.getAll();
    return { type: 'OK', data: blogPosts };
  }

  async create(blogPost: BlogPostUserInput, categoryIds: number[]):
  Promise<BlogPostServiceResponse<BlogPostRecord>> {
    
    const blogPostInput = { ...blogPost, published: new Date(), updated: new Date() };

    const createBlogPost = await this.blogPostRepository.create(blogPostInput, categoryIds);
    return { type: 'CREATED', data: createBlogPost };
  }
}