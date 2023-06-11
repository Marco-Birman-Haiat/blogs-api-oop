import express from 'express';
import userRoute from './routes/userRoute';
import categoryRoute from './routes/categoryRoute';
import blogPostRoute from './routes/blogPostRoute';
import loginRoute from './routes/loginRoute';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint - no projeto trybe, para testes (?)
// app.get('/', (_request, response) => {
  //   response.send();
  // });

app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/blogposts', blogPostRoute);
app.use('/login', loginRoute);

app.use(errorMiddleware);

export default app;
