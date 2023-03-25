function checkJump(heights: number[]): boolean {
  let max: number = Math.max(...heights);
  let pos: number = heights.indexOf(max);

  let part1: number[] = heights.slice(0, pos);
  let part2: number[] = heights.slice(pos, heights.length);

  let con1: boolean = part1.every(
    function(_: number, i: number): boolean {
      return i == 0 || part1[i] >= part1[i - 1];
    }
  );

  let con2: boolean = part2.every(
    function(_: number, i: number): boolean {
      return i == 0 || part2[i] <= part2[i - 1];
    }
  );

  return con1 && con2 && !!part1.length && part2.length > 1;
}