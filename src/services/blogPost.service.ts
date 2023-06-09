import { BlogPostRepository } from "../repositories/blogPost.repository";
import { BlogPostRecord } from "../repositories/interfaces/blogPost.record";
import { ServiceResponse } from "../repositories/types/serviceResponse";


type BlogPostServiceResponse<T> = ServiceResponse<T>; 

export interface BlogPostService {
  // create()
  getAll(): Promise<BlogPostServiceResponse<BlogPostRecord[]>>
}

export default class BlogPostServiceImpl implements BlogPostService {
  constructor(private blogPostRepository: BlogPostRepository) {}
  
  async getAll(): Promise<BlogPostServiceResponse<BlogPostRecord[]>> {
    const blogPosts = await this.blogPostRepository.getAll();
    return { type: 'OK', data: blogPosts };
  }
}