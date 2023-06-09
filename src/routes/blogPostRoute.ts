import express from 'express';
import BlogPostRepositoryImpl from '../repositories/blogPost.repository';
import BlogPostControllerImpl from '../controllers/blogPost.controller';
import BlogPostServiceImpl from '../services/blogPost.service';

const blogPostRoute = express.Router();

const blogPostRepository = new BlogPostRepositoryImpl();
const blogPostService = new BlogPostServiceImpl(blogPostRepository);
const blogPostContrller = new BlogPostControllerImpl(blogPostService);

blogPostRoute.get('/', async (req, res) => blogPostContrller.getAll(req, res));

export default blogPostRoute;
