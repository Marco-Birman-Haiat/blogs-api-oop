import app from "./app";

const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(
  `Server ouvindo a porta ${port}`
));

export default server;
