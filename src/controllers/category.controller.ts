import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export interface CategorController {
  getAll(req: Request, res: Response): Promise<Response>;
  getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
}

export class CategoryControllerImpl implements CategorController {
  constructor(private categoryService: CategoryService) {}

  async getAll(req: Request, res: Response): Promise<Response> {
    const allCategories = await this.categoryService.getAll();

    return res.status(200).json(allCategories.data);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const foundCategory = await this.categoryService.getById(Number(id));

    return res.status(200).json(foundCategory.data);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const createdCategory = await this.categoryService.create({ name });

    return res.status(201).json(createdCategory.data);
  }
}