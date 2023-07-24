import express from 'express';
import UserRepositoryImpl from '../repositories/user.repository';
import LoginServiceImpl from '../services/login.service';
import JwtAuthorizationImpl from '../utils/authFunctions';
import LoginControllerImpl from '../controllers/login.controller';
import LoginValidationImpl from '../services/validations/loginValidations';
import { validateLoginRequest } from '../middlewares/login.middleware';

const loginRoute = express.Router();

const userRepository = new UserRepositoryImpl();
const jwtAuthorization = new JwtAuthorizationImpl()
const loginValidation = new LoginValidationImpl(userRepository);

const loginService = new LoginServiceImpl(loginValidation, jwtAuthorization);
const loginController = new LoginControllerImpl(loginService);

loginRoute.post('/', validateLoginRequest, async (req, res) => loginController.login(req, res));

export default loginRoute;
