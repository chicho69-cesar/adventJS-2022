function createCube(size: number): string {
  let firstPart: string[] = [];
  let secondPart: string[] = [];

  new Array<number>(size)
    .fill(0).map((_: number, i: number) => {
      firstPart.push(
        " ".repeat(size - (i + 1)) + 
        "/\\".repeat((i + 1)) + 
        "_\\".repeat(size)
      );
      
      secondPart.push(
        " ".repeat((i + 1) - 1) + 
        "\\/".repeat(size + 1 - (i + 1)) + 
        "_/".repeat(size)
      );
    });

  let result: string[] = [ 
    ...firstPart, 
    ...secondPart 
  ];

  return result.join("\n");
}