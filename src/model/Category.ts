import { v4 as uuidV4 } from "uuid";

export class Category {
  public id?: string;
  public created_at?: Date;
  public name: string;
  public description: string;

  constructor(name: string, description: string) {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}
