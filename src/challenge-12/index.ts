interface Sleigh {
  name: string;
  consumption: number;
}

function selectSleigh(distance: number, sleighs: Sleigh[]): (string | null) {
  let filtered: Sleigh[] = sleighs.filter((sl: Sleigh) => 
    sl.consumption * distance <= 20
  );

  let result: (Sleigh | undefined) = filtered.at(-1);

  return result ? result.name : null;
}