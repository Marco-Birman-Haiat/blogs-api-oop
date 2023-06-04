import Joi from 'joi';

const userCreateSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

// const categoryCreateSchema = Joi.object({
//   name: Joi.required(),
// });

// const createBlogPostSchema = Joi.object({
//   title: Joi.string().required(),
//   content: Joi.string().required(),
//   categoryIds: Joi.array().required(),
// });

// const updateBlogPostSchema = Joi.object({
//   title: Joi.string().required(),
//   content: Joi.string().required(),
// });

export {
  userCreateSchema
};
