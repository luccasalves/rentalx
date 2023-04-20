import { v4 } from "uuid";

export class Specification {
  public id?: string;
  public created_at?: Date;
  public name: string;
  public description: string;

  constructor(name: string, description: string) {
    if (!this.id) {
      this.id = v4();
    }
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}
