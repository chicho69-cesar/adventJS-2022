function sortToys(toys: string[], positions: number[]): string[] {
  let map: {} = {};

  toys.forEach((toy: string, i: number) => {
    map[positions[i]] = toy;
  });

  return Object.values(map);
}