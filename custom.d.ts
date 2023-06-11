import { JwtPayload } from "jsonwebtoken";

export type TokenPayload = {
  id: number; 
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      payload?: JwtPayload,
    }
  }
}

// export declare namespace Express {
//    export interface Request {
//       payload?: TokenPayload
//    }
// }
