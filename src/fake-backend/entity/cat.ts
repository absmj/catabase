import { CatRepository, Options, Position } from "../repository/cat";

export default class Cat implements CatRepository {
  cat_id: number;
  name: string;
  position: Position;
  options: Options | null;
  width: string;
  height: string;

  constructor(props: CatRepository) {
    this.cat_id = props.cat_id;
    this.name = props.name;
    this.position = props.position;
    this.options = props.options ?? {
      eyeColor: "#030075",
      eyeBorrowColor: "#030075",
      headColor: "#434ff2",
      bodyColor1: "#ffac42",
      bodyColor2: "#ffac42",
      patternColor: "#e57c35",
      strokeColor: "#030075",
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
