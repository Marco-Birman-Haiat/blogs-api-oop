import jwt from 'jsonwebtoken';

const secret = process.env.JTW_SECRET || 'minhaSenhaMBH';

export type TokenPayload = {
  id: number; 
  email: string;
}

export interface JwtAuthorization {
  verifyToken(token: string): string | jwt.JwtPayload;
  createToken(payload: TokenPayload): string;
}

export default class JwtAuthorizationImpl implements JwtAuthorization {
  verifyToken(token: string): string | jwt.JwtPayload {
    return jwt.verify(token, secret)
  }

  createToken(payload: TokenPayload): string {
    return jwt.sign({ data: payload }, secret)
  }
}
