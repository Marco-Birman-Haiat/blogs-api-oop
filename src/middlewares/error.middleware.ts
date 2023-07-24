import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import getErrorCode from "../utils/httpError";
import { ResponseTypeError } from "../repositories/types/reponse";

type middlwareError = {
  type: ResponseTypeError;
  data: {
    message: string;
  };
}

export const errorMiddleware = (error: middlwareError, req: Request, res: Response, next: NextFunction): Response => {
  return res.status(getErrorCode(error.type)).json(error.data);
};
