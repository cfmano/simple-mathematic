export function factorial(n: number): number {
  if (n > 170) {
    return Infinity;
  }
  else if (n < 0 || n % 1 !== 0) {
    return Number.NaN;
  }
  else {
    let result = 1;
    for (let i=1; i<=n;i++) 
        result *= i;
    return result;
  }
}
