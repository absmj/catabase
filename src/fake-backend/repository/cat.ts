export interface CatRepository {
  name: string;
  position: Position;
  options: Options | null;
  width: string;
  height: string;
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
}
