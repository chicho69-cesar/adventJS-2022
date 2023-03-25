function getGiftsToRefill(a1: string[], a2: string[], a3: string[]): string[] {
  let setted: string[] = [
    ...new Set(a1),
    ...new Set(a2),
    ...new Set(a3)
  ];

  let uniqueGifts: string[] = setted.filter((gift: string) =>
    a1.includes(gift) + a2.includes(gift) + a3.includes(gift) < 2
  );

  return uniqueGifts;
}