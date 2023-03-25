function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number): number {
  return Math.max(
    ...giftsCities
      .sort((x: number, y: number) => y - x)
      .reduce(
        (result: number[], _: number, i: number) => (
          i && giftsCities.unshift(giftsCities.pop()!),
          (i = giftsCities
            .slice(0, maxCities)
            .reduce((acc: number, curr: number) => (acc += curr), 0)
          ),
          i <= maxGifts && result.push(i),
          i - giftsCities[maxCities - 1] <= maxGifts &&
          result.push(i - giftsCities[maxCities - 1]),
          result
        ),
        []
      ),
    0
  );
}