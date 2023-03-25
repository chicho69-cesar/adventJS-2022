function decorateTree(base: string): string[] {
  interface Combination {
    PP: string; RR: string; BB: string;
    PB: string; BP: string; RP: string;
    PR: string; BR: string; RB: string;
  }

  let combinations: Combination = {
    'PP': 'P', 'RR': 'R', 'BB': 'B',
    'PB': 'R', 'BP': 'R', 'RP': 'B',
    'PR': 'B', 'BR': 'P', 'RB': 'P'
  }

  const result: string[] = [ base ];
  let baseToArray: string[] = base.split(' ');
  let list: string[] = new Array(baseToArray.length - 1).fill('')

  list.map((_: string) => {
    baseToArray = [ ...baseToArray ]
      .splice(1)
      .map((val: string, index: number): string => {
        const key: string = baseToArray[index] + val;
        const resultCombination: string = combinations[key];
        return resultCombination;
      });

    result.push(baseToArray.join(' '));
  })

  return result.reverse();
}