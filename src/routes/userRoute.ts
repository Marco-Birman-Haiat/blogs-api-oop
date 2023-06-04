import express from 'express';
import { UserRepositoryInMemoryImpl } from '../repositories/user.repository';
import { UserValidationImpl } from '../services/validations/userValidations';
import { UserServiceImpl } from '../services/user.service';
import { UserControllerImpl } from '../controllers/user.controller';

const userRoute = express.Router();

const userRepository = new UserRepositoryInMemoryImpl();
const userValidations = new UserValidationImpl();
const userService = new UserServiceImpl(userRepository, userValidations);
const userController = new UserControllerImpl(userService);

userRoute.post('/', async (req, res) => userController.create(req, res));
userRoute.get('/', async (req, res) => userController.getAll(req, res));
userRoute.delete('/:id', async (req, res) => userController.delete(req, res));

export default userRoute;
