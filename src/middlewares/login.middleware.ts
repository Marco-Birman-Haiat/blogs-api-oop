import { NextFunction, Request, Response } from "express";

export const validateLoginRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) return next({ type: 'INVALID_DATA', data:{ message: 'Some required request field is mising' } });
  return next();
}