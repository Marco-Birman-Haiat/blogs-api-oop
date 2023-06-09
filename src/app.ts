import express from 'express';
import userRoute from './routes/userRoute';
import categoryRoute from './routes/categoryRoute';
import blogPostRoute from './routes/blogPostRoute';

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint - no projeto trybe, para testes (?)
// app.get('/', (_request, response) => {
  //   response.send();
  // });

app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/blogposts', blogPostRoute);

export default app;
