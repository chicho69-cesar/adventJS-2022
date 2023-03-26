function canExit(maze: string[][]): boolean {
  function fillPath(line: string[]) {
    return line
      .join("")
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("");
  }
  
  const x: number = maze[0].length
  const y: number = maze.length
  const area: number = x * y;

  new Array(area).fill('').forEach(() => {
    maze.map((hor: string[], i: number) => {
      maze[i] = fillPath(hor);
      maze[i] = maze[i]
        .map((_, j: number) => fillPath(maze.map(x => x[j]))[i])
    })
  });

  return !maze.flat(2).includes("E");
}