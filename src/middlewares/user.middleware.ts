import { NextFunction, Request, Response } from "express";

export const validateUserCreate = (req: Request, res: Response, next: NextFunction) => {
  const { displayName, email, password } = req.body;

  const allFieldsExist = displayName && email && password;

  if(!allFieldsExist) return next({ type: 400, message: 'Some required field is missing' });
  return next();
}