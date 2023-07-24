// import { UserControllerImpl } from "./controllers/user.controller";
// import { UserFactoryTemp } from "./repositories/interfaces/user.record";
// import { UserRepositoryInMemoryImpl } from "./repositories/user.repository";
// import { UserServiceImpl } from "./services/user.service";
// import { UserValidationImpl } from "./services/validations/userValidations";

// const userRepository = new UserRepositoryInMemoryImpl();
// const userValidations = new UserValidationImpl();
// const userService = new UserServiceImpl(userRepository, userValidations);
// const userController = new UserControllerImpl(userService);


// async function main() {
//   const newUser = new UserFactoryTemp('Marco', 'marco.haiat@gmail.com', 'senha', 'minhaImage');
//   const newUser1 = new UserFactoryTemp('Marco2', 'marco2.haiat@gmail.com', 'senha', 'minhaImage');
//   const newUser2 = new UserFactoryTemp('Marco3', 'marco3.haiat@gmail.com', 'senha', 'minhaImage');
  
//   await userController.create(newUser);
//   await userController.create(newUser1);
//   await userController.create(newUser2);

//   // const users = await userController.getAll();
//   const user = await userController.getByEmail('marco3.haiat@gmail.com');
//   console.log(user);
// }

// main();
