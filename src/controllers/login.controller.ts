import { Request, Response } from "express";
import { LoginService } from "../services/login.service";
import getErrorCode from "../utils/httpError";

export interface LoginController {
  login(req: Request, res: Response): Promise<Response>
}

export default class LoginControllerImpl implements LoginController {
  constructor(private loginService: LoginService) {}
  
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    
    const loginAttempt = await this.loginService.login({ email, password });

    if (loginAttempt.type === 'UNATHORIZED') {
      return res.status(getErrorCode(loginAttempt.type)).json(loginAttempt.data);
    }
    return res.status(200).json({ token: loginAttempt.data });
  }
}