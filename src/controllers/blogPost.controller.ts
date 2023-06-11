import { Request, Response } from 'express';
import { BlogPostService } from '../services/blogPost.service';
import { JwtAuthorization } from '../utils/authFunctions';

export interface BlogPostController {
  create(req: Request, res: Response): Promise<Response>
  getAll(req: Request, res: Response): Promise<Response>
}

export default class BlogPostControllerImpl implements BlogPostController {
  constructor(private blogPostService: BlogPostService) {}
  
  async create(req: Request, res: Response): Promise<Response> {
    const { title, content, categoryIds } = req.body;
    const { id, email } = req.payload;

    const createdBlogPost = await this.blogPostService.create({ title, content, userId: id }, categoryIds)

    return res.status(201).json(createdBlogPost);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const allBlogPosts = await this.blogPostService.getAll();
    return res.status(200).json(allBlogPosts.data);
  }
}
