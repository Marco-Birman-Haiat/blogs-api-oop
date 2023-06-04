import { Request, Response } from "express";
import UserRecord, { UserInput } from "../repositories/interfaces/user.record";
import { ControllerResponse } from "../repositories/types/controllerResponse";
import { UserService } from "../services/user.service";

export interface UserController {
  getAll(req: Request, res: Response): Promise<Response>
  create(req: Request, res: Response): Promise<Response>
  getByEmail(req: Request, res: Response): Promise<Response>
  delete(req: Request, res: Response): Promise<Response>
}

export class UserControllerImpl implements UserController {
  constructor(private userService: UserService) {}
  
  async getAll(req: Request, res: Response): Promise<Response> {
    const allUsers = await this.userService.getAll()
    return res.status(200).json(allUsers.data);
  }

  async getByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const foundUser = await this.userService.getByEmail(email);

    return res.status(200).json(foundUser.data);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { displayName, email, password, image } = req.body;
    
    const createdUser = await this.userService.create({ displayName, email, password, image });
    return res.status(200).json(createdUser.data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    
    const deletedUser = await this.userService.delete(Number(id));
    return res.status(200).json(deletedUser.data);
  }
}