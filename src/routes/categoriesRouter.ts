import { Router } from "express";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryService } from "../services/CategoryService";

export const categoriesRoutes = Router();
const categoryRepo = new CategoryRepository();
const categoryService = new CategoryService(categoryRepo);

categoriesRoutes.post("/", (request, reply) => {
  const { name, description } = request.body;

  categoryService.create({ name, description });
  return reply.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const list = categoryService.list();
  res.json(list);
});
