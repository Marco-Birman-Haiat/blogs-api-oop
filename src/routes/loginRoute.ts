import express from 'express';
import UserRepositoryImpl from '../repositories/user.repository';
import LoginServiceImpl from '../services/login.service';
import JwtAuthorizationImpl from '../utils/authFunctions';
import LoginControllerImpl from '../controllers/login.controller';

const loginRoute = express.Router();

const userRepository = new UserRepositoryImpl();
const jwtAuthorization = new JwtAuthorizationImpl()
const loginService = new LoginServiceImpl(userRepository, jwtAuthorization);
const loginController = new LoginControllerImpl(loginService);

loginRoute.post('/', async (req, res) => loginController.login(req, res));

export default loginRoute;
