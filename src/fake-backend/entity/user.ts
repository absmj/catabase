import { CatRepository, Options, Position } from "../repository/cat";
import { Repository } from "../repository/repository";
import { UserRepository } from "../repository/user";
import { delete_cookie, set_cookie } from "../utils";

import Cat from "./cat";

export default class User extends Repository implements UserRepository {
  username: string;
  name: string;
  surname: string;
  password: string;
  id: number;
  cats: CatRepository[] = [];
  selected: number;

  constructor(props: UserRepository) {
    super();
    this.id = Date.now();
    this.username = props.username;
    this.name = props.name;
    this.surname = props.surname;
    this.password = props.password;
    const selected =
      (props?.selected && props.cats && props?.selected <= props.cats.length - 1
        ? props.selected
        : null) ||
      props?.cats?.length - 1 ||
      0;

    this.selected = selected;
    if (!props.cats)
      this.cats.push(
        new Cat({
          cat_id: Date.now(),
          name: "my-cat",
          position: {
            x: "",
            y: "",
          },
          width: "500px",
          height: "500px",
          options: {
            eyeColor: "#030075",
            eyeBorrowColor: "#030075",
            headColor: "#434ff2",
            bodyColor1: "#ffac42",
            bodyColor2: "#FFFFFF",
            patternColor: "#e57c35",
            strokeColor: "#030075",
          } as Options,
        })
      );
    else {
      this.cats = props.cats;
    }
  }

  static auth(username: string, pass: string): UserRepository {
    const users = this.repository as UserRepository[];

    const findIndex = users.findIndex(
      (user: UserRepository) =>
        user.username === username && user.password === pass
    );

    if (findIndex === -1) throw new Error("Username or password is incorrect!");
    return users[findIndex];
  }

  static get repository(): UserRepository[] {
    return Repository.load("user") as UserRepository[];
  }
}
