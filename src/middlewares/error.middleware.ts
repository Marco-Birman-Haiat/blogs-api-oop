import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

type middlwareError = {
  type: number;
  message: string;
}

export const errorMiddleware = (error: middlwareError, req: Request, res: Response, next: NextFunction): Response => {
  console.log('passou no middleware de erro');
  return res.status(error.type).json({ message: error.message });
};
