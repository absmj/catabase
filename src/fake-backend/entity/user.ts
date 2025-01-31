import { CatRepository, Position } from "../repository/cat";
import { Repository } from "../repository/repository";
import { UserRepository } from "../repository/user";

import { Cat } from "./cat";

export class User extends Repository implements UserRepository {
  username: string;
  name: string;
  surname: string;
  password: string;
  id: number;
  cats: CatRepository[] = [];

  constructor(props: UserRepository) {
    super();
    this.id = Date.now();
    this.username = props.username;
    this.name = props.name;
    this.surname = props.surname;
    this.password = props.password;
    this.cats.push(
      new Cat({
        name: "my-cat",
        position: {
          x: "0px",
          y: "0px",
        },
        width: "500px",
        height: "500px",
        options: null,
      })
    );
  }

  static async auth(username: string, pass: string): Promise<UserRepository> {
    const users = (await Repository.load("users")) as UserRepository[];
    const findIndex = users.findIndex(
      (user: UserRepository) =>
        user.username === username && user.password === pass
    );

    if (findIndex === -1) throw new Error("Username or password is incorrect!");
    return users[findIndex];
  }
}
