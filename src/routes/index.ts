import { Router } from 'express';
import userRoute from './userRoute';
import categoryRoute from './categoryRoute';
import blogPostRoute from './blogPostRoute';
import loginRoute from './loginRoute';

const router = Router();

router.use('/users', userRoute);
router.use('/categories', categoryRoute);
router.use('/blogposts', blogPostRoute);
router.use('/login', loginRoute);

export default router;
