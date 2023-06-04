import express from 'express';
import userRoute from './routes/userRoute';
import categoryRoute from './routes/categoryRoute';

const app = express();

app.use(express.json());

// não remova ou mova esse endpoint - no projeto trybe, para testes (?)
// app.get('/', (_request, response) => {
  //   response.send();
  // });

app.use('/users', userRoute);
app.use('/categories', categoryRoute);

export default app;
