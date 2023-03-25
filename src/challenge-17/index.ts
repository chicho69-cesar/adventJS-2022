function carryGifts(gifts: string[], maxWeight: number): string[] {
  if (!gifts.every((gift: string) => maxWeight >= gift.length)) {
    return [];
  }

  let carried: string[] = [''];

  gifts.map((gift: string) => {
    const prevWeight: number = carried.at(-1)!.replace(' ', '').length;
    
    if ((prevWeight + gift.length) <= maxWeight) {
      carried[carried.length - 1] += ' ' + gift;
      carried[carried.length - 1] = carried[carried.length - 1].trim();
      return;
    }

    carried.push(gift);
  })

  return carried;
}