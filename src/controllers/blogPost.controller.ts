import { Request, Response } from 'express';
import { BlogPostService } from '../services/blogPost.service';

export interface BlogPostController {
  getAll(req: Request, res: Response): Promise<Response>
}

export default class BlogPostControllerImpl implements BlogPostController {
  constructor(private blogPostService: BlogPostService) {}
  
  async getAll(req: Request, res: Response): Promise<Response> {
    const allBlogPosts = await this.blogPostService.getAll();
    return res.status(200).json(allBlogPosts.data);
  }
}
