import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CategoryService {
  constructor(private repo: ICategoryRepository) {}
  create({ name, description }: IRequest) {
    const categoryExist = this.repo.findByName(name);

    if (categoryExist) {
      throw new Error("category already exist!");
    }

    this.repo.create({ name, description });
  }

  list() {
    return this.repo.list();
  }
}
