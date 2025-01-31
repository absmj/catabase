import { CatRepository, Options, Position } from "../repository/cat";

export class Cat implements CatRepository {
  name: string;
  position: Position;
  options: Options | null;
  width: string;
  height: string;

  constructor(props: CatRepository) {
    this.name = props.name;
    this.position = props.position;
    this.options = props.options ?? {
      eyeColor: "#000",
      eyeBorrowColor: "#000",
      headColor: "#434ff2",
      bodyColor1: "#45ff32",
      bodyColor2: "#22FA23",
    };
    this.width = props.width;
    this.height = props.height;
  }

  set resize({ width, height }: { width: string; height: string }) {
    if (width) this.width = width;
    if (height) this.height = height;
  }

  set move(position: Position) {
    this.position = position;
  }
}
