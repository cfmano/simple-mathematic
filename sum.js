export function sum(...set) {
  let result = 0;
  for (let i=0; i<set.length; i++) {
    result += set[i];
  }
  return result;
}
