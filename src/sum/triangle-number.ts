export function triangleNumber(size: number): number {
  return (size > 0 && size % 1 === 0)
          ? size * (size + 1) * 0.5
          : Number.NaN;
}