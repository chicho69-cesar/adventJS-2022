function countTime(leds: number[]): number {
  const zerosArray: string[] = leds.join("").split("1");
  zerosArray[0] += zerosArray.pop();

  const sorteredArray: string[] = zerosArray.sort(
    (a: string, b: string) => b.length - a.length
  );

  return sorteredArray[0].length * 7;
}