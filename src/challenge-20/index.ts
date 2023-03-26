interface ReindeerType {
  type: string;
  weightCapacity: number;
}

type Gift = {
  country: string;
  weight: number;
}

type Result = {
  type: string;
  num: number;
}

type CountryReindeer = {
  country: string;
  reindeers: Result[];
}

function howManyReindeers(reindeerTypes: ReindeerType[], gifts: Gift[]): CountryReindeer[] {
  let reindeersFiltered: CountryReindeer[] = gifts.map((gift: Gift) => {
    let { weight } = gift;

    let reindeers: (string | number)[][] = reindeerTypes
      .map((reindeerType: ReindeerType) => [
        reindeerType.type, reindeerType.weightCapacity
      ])
      .filter((reindeerType: (string | number)[]) => reindeerType[1] < weight)
      .sort((a, b) => (+a[1]) - (+b[1]));

    let result: Result[] = reindeers.map(([ type ]) => ({
      type: `${ type }`,
      num: 0,
    }));

    reindeers.map((_, i: number) => {
      let sliced: (string | number)[][] = reindeers.slice(0, reindeers.length - i);

      let sum: number = sliced.reduce((sum: number, e: (string | number)[]) => {
        return sum + (+e[1]);
      }, 0);
      
      sliced.map((_, i: number) => {
        result[i].num += Math.floor(weight / sum);
      });

      weight %= sum;
    });

    let reindeersResult: Result[] = result.reverse();

    let countryReindeer: CountryReindeer = {
      country: gift.country,
      reindeers: [
        ...reindeersResult
      ]
    };

    return countryReindeer;
  });

  return reindeersFiltered;
}