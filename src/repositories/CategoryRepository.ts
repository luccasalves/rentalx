import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const newCategory = new Category(name, description);

    this.categories.push(newCategory);
  }

  findByName(name: string) {
    return this.categories.find((c) => c.name === name);
  }

  list(): Category[] {
    return this.categories;
  }
}
