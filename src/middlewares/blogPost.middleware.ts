import { NextFunction, Request, Response } from 'express';

export const blogPostCreateRequestValidation = (req: Request, res: Response, next: NextFunction): void => {
  const { content, title, categoryIds } = req.body;

  const allFieldsExist = content && title && categoryIds;

  if (!allFieldsExist) {
    return next({ type: 'INVALID_DATA', data: { message: 'Some required field is missing'}})
  }
  return next();
};

export const blogPostUpdateRequestValidation = (req: Request, res: Response, next: NextFunction): void => {
  const { content, title } = req.body;

  const allFieldsExist = content && title;

  if (!allFieldsExist) {
    return next({ type: 'INVALID_DATA', data: { message: 'Some required field is missing'}})
  }
  return next();
};