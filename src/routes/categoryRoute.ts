import express from 'express';
import { CategoryRepositoryImpl } from '../repositories/category.repository';
import { CategoryServiceImpl } from '../services/category.service';
import { CategoryControllerImpl } from '../controllers/category.controller';
import { validateCategoryCreate } from '../middlewares/category.middleware';
import { validateJWT } from '../middlewares/token';

const categoryRoute = express.Router();

const categoryRepository = new CategoryRepositoryImpl();
const categoryService = new CategoryServiceImpl(categoryRepository);
const categoryController = new CategoryControllerImpl(categoryService);

categoryRoute.get('/', validateJWT, async (req, res) => categoryController.getAll(req, res));
categoryRoute.get('/:id', validateJWT, async (req, res) => categoryController.getById(req, res));
categoryRoute.post('/', validateJWT, validateCategoryCreate, async (req, res) => categoryController.create(req, res));

export default categoryRoute;
