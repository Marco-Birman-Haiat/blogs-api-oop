import express from 'express';
import BlogPostRepositoryImpl from '../repositories/blogPost.repository';
import BlogPostControllerImpl from '../controllers/blogPost.controller';
import BlogPostServiceImpl from '../services/blogPost.service';
import UserRepositoryImpl from '../repositories/user.repository';
import { validateJWT } from '../middlewares/token';
import { blogPostCreateRequestValidation, blogPostUpdateRequestValidation } from '../middlewares/blogPost.middleware';
import BlogPostValidationImpl from '../services/validations/blogPostValidations';
import CategoryValidationImpl from '../services/validations/categoryValidations';
import { CategoryRepositoryImpl } from '../repositories/category.repository';

const blogPostRoute = express.Router();

const categoryRepository = new CategoryRepositoryImpl()
const categoryValidation = new CategoryValidationImpl(categoryRepository);
const blogPostValidation = new BlogPostValidationImpl(categoryValidation);

const blogPostRepository = new BlogPostRepositoryImpl();
const userRepository = new UserRepositoryImpl();
const blogPostService = new BlogPostServiceImpl(blogPostRepository, userRepository, blogPostValidation);
const blogPostContrller = new BlogPostControllerImpl(blogPostService);

blogPostRoute.get('/', validateJWT, async (req, res) => blogPostContrller.getAll(req, res));
blogPostRoute.get('/search', validateJWT, async (req, res) => blogPostContrller.search(req, res));
blogPostRoute.post('/', validateJWT, blogPostCreateRequestValidation, async (req, res) => blogPostContrller.create(req, res));
blogPostRoute.put('/:id', validateJWT, blogPostUpdateRequestValidation, async (req, res) => blogPostContrller.update(req, res));

export default blogPostRoute;
