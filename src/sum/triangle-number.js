export function triangleNumber(size) {
  return (size > 0 && size % 1 === 0)
          ? size * (size + 1) * 0.5
          : Number.NaN;
}
