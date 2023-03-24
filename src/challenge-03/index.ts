function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
  let heightOfGifts: number = packOfGifts.reduce((acc: number, current: string) => {
    return acc + current.length;
  }, 0);

  let heightOfReinders: number = reindeers.reduce((acc: number, current: string) => {
    return acc + (current.length * 2);
  }, 0);

  let moduleOperation: number = (heightOfReinders % heightOfGifts);
  let maxPacks: number = (heightOfReinders - moduleOperation) / heightOfGifts;

  return maxPacks;
}