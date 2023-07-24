// import { verifyToken } from '../auth/authFunctions';

import { NextFunction, Response, Request } from "express";
import JwtAuthorizationImpl from "../utils/authFunctions";
import { JwtPayload } from "jsonwebtoken";
// import { Request } from 'express-jwt'

export const validateJWT = (req: Request, _res: Response, next: NextFunction): void => {
  const { authorization: token } = req.headers;
  if (!token) return next({ type: 401, message: 'Token not found' });

  const jtwFunctions = new JwtAuthorizationImpl();
  try {
    const payload = jtwFunctions.verifyToken(token) as JwtPayload;
    req.payload = payload.data;
    next();
  } catch (e) {
    return next({ type: 'UNATHORIZED', message: 'Expired or invalid token' });
  }
};
