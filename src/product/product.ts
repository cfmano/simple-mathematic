export function product(...set: number[]): number {
  let result = 1;
  for (let i=0; i<set.length; i++) {
    result *= set[i];
  }
  return result;
}
