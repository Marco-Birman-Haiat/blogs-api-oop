import { Request, Response } from 'express';
import { BlogPostService } from '../services/blogPost.service';
import { JwtAuthorization } from '../utils/authFunctions';
import getErrorCode from '../utils/httpError';

export interface BlogPostController {
  create(req: Request, res: Response): Promise<Response>;
  getAll(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  search(req: Request, res: Response): Promise<Response>;
}

export default class BlogPostControllerImpl implements BlogPostController {
  constructor(private blogPostService: BlogPostService) {}
  
  async create(req: Request, res: Response): Promise<Response> {
    const { title, content, categoryIds } = req.body;
    const { id, email } = req.payload;

    const createdBlogPost = await this.blogPostService.create({ title, content, userId: id }, categoryIds)
    if (createdBlogPost.type === 'UNPROCESSABLE_DATA') {
      return res.status(getErrorCode(createdBlogPost.type)).json(createdBlogPost.data);
    }

    return res.status(201).json(createdBlogPost);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const allBlogPosts = await this.blogPostService.getAll();
    return res.status(200).json(allBlogPosts.data);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { content, title } = req.body;

    const updatedBlogPost = await this.blogPostService.update(id, { title, content });
    if (updatedBlogPost.type === 'UNPROCESSABLE_DATA') {
      return res.status(getErrorCode(updatedBlogPost.type)).json(updatedBlogPost.data);
    }

    return res.status(200).json(updatedBlogPost.data);
  }

  async search(req: Request, res: Response): Promise<Response> {
    const { q: searchTerm } = req.query;
    
    const foundBlogPosts = await this.blogPostService.search(searchTerm as string);
    return res.status(200).json(foundBlogPosts.data);
  }
}
