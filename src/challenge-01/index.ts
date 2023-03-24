function wrapping(gifts: string[]): string[] {
  return gifts.map((g: string) => {
    let envolve: string = (new Array(g.length + 2).fill('*')).join('');
    return `${ envolve }\n*${ g }*\n${ envolve }`;
  });
}