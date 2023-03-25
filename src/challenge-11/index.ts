function getCompleted(part: string, total: string): string {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b)

  const partInSeconds: number = part
    .split(':')
    .reduce((acc: number, current: string, index: number): number => {
      return acc + (+current) * 60 ** (2 - index);
    }, 0);
    
  const totalInSeconds: number = total
    .split(':')
    .reduce((acc: number, current: string, index: number): number => {
      return acc + (+current) * 60 ** (2 - index);
    }, 0);

  const gcdOfPartAndTotal: number = gcd(partInSeconds, totalInSeconds);
  const numerator: number = partInSeconds / gcdOfPartAndTotal;
  const denominator: number = totalInSeconds / gcdOfPartAndTotal;

  return `${ numerator }/${ denominator }`;
}