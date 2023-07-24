import { NextFunction, Request, Response } from "express";

export const validateCategoryCreate = (req: Request, res: Response, next: NextFunction): void => {
  const { name } = req.body;

  if (!name) return next({ type: 'INVALID_DATA', message: '"name" is required' });
  return next();
}