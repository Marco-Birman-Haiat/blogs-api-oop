import { JwtPayload } from "jsonwebtoken";

import { Express } from "express-serve-static-core";

interface TokenData {
  email: string;
  id: string;
}

declare module "express-serve-static-core" {
  interface Request {
    payload: JwtPayload;
  }
}
