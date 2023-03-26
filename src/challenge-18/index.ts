function dryNumber(dry: number, numbers: number): number[] {
  let afected: number[] = [];

  for (let i: number = 1; i <= numbers; i++) {
    if (`${ i }`.includes(`${ dry }`)) {
      afected.push(i);
    }
  }

  return afected;
}