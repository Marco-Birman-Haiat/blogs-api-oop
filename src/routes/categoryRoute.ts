import express from 'express';
import { CategoryRepositoryImpl } from '../repositories/category.repository';
import { CategoryServiceImpl } from '../services/category.service';
import { CategoryControllerImpl } from '../controllers/category.controller';

const categoryRoute = express.Router();

const categoryRepository = new CategoryRepositoryImpl();
const categoryService = new CategoryServiceImpl(categoryRepository);
const categoryController = new CategoryControllerImpl(categoryService);

categoryRoute.get('/', async (req, res) => categoryController.getAll(req, res));
categoryRoute.get('/:id', async (req, res) => categoryController.getById(req, res));
categoryRoute.post('/', async (req, res) => categoryController.create(req, res));

export default categoryRoute;
