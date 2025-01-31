import { catHash } from "../utils";

interface UserEntity {
  name: string;
  surname: string;
  username: string;
  password: string;
}

class UserModel {
  id: number;
  name!: string;
  surname!: string;
  username!: string;
  password!: string;

  constructor(props: UserEntity) {
    this.id = Date.now();
    this.name = props.name;
    this.surname = props.surname;
    this.password = props.password;
  }

  update(field: UserEntity, value: string): void {
    if (field in this) {
      this[field] = value;
    }
  }

  static auth() {
    return this.password_verify();
  }

  private static password_verify(pass: string, hashPass: string): boolean {
    return hashPass === catHash(pass);
  }
}
