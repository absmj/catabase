export function catHash(pass: string, hashCode: number = 55): string {
  let result: string = "";
  for (let index = 0; index < pass.length; index++) {
    result += String.fromCharCode(pass.charCodeAt(index) ^ hashCode);
  }

  return result;
}
