export function factorial(n) {
  if (n < 0) {
    return Number.NaN;
  }
  else if (n > 170) {
    return Infinity;
  }
  else {
    let result = 1;
    for (let i=1; i<=n;i++) 
        result *= i;
    return result;
  }
}
