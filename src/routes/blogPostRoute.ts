import express from 'express';
import BlogPostRepositoryImpl from '../repositories/blogPost.repository';
import BlogPostControllerImpl from '../controllers/blogPost.controller';
import BlogPostServiceImpl from '../services/blogPost.service';
import UserRepositoryImpl from '../repositories/user.repository';
import { validateJWT } from '../middlewares/token';

const blogPostRoute = express.Router();

const blogPostRepository = new BlogPostRepositoryImpl();
const userRepository = new UserRepositoryImpl();
const blogPostService = new BlogPostServiceImpl(blogPostRepository, userRepository);
const blogPostContrller = new BlogPostControllerImpl(blogPostService);

blogPostRoute.get('/', async (req, res) => blogPostContrller.getAll(req, res));
blogPostRoute.post('/', validateJWT, async (req, res) => blogPostContrller.create(req, res));

export default blogPostRoute;
