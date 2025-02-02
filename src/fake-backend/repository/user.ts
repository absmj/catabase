import { CatRepository } from "./cat";

export interface UserRepository {
  username: string;
  name: string;
  surname: string;
  password: string;
  id: number;
  selected: number;
  cats: CatRepository[];
}
