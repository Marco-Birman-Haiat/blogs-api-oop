import express = require('express');
import router from './routes';
import { errorMiddleware } from './middlewares/error.middleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());
    this.app.use(router);

    this.app.get('/', (_req, res) => res.status(200).send('API de Blogs no ar!'));

    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`API de Blogs no ar na porta ${PORT}!`));
  }
}

export default App;
