export function sum(...set: number[]): number {
  let result = 0;
  for (let i=0; i<set.length; i++) {
    result += set[i];
  }
  return result;
}
