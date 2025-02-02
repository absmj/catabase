export interface CatRepository {
  cat_id: number;
  name: string;
  position: Position;
  options: Options | null;
  width: string;
  height: string;
  [key: string]: any;
}

export interface Position {
  x: string;
  y: string;
}

export interface Options {
  headColor: string;
  eyeColor: string;
  eyeBorrowColor: string;
  bodyColor1: string;
  bodyColor2: string;
  patternColor: string;
  strokeColor: string;
}
