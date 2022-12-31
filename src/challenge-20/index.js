function howManyReindeers(reindeerTypes, gifts) {
  let reindeersFiltered = gifts.map(gift => {
    let { weight } = gift
    let reindeers = reindeerTypes
      .map(reindeerType => [
        reindeerType.type, reindeerType.weightCapacity
      ])
      .filter(reindeerType => reindeerType[1] < weight)
      .sort((a, b) => a[1] - b[1])

    let result = reindeers.map(([ type ]) => ({
      type,
      num: 0,
    }))

    reindeers.map((_, i) => {
      let sliced = reindeers.slice(0, reindeers.length - i)
      let sum = sliced.reduce((sum, e) => {
        return sum + e[1]
      }, 0)
      
      sliced.map((_, i) => {
        result[i].num += Math.floor(weight / sum)
      })

      weight %= sum
    })

    return {
      country: gift.country,
      reindeers: result.reverse(),
    }
  })

  return reindeersFiltered
}

module.exports = howManyReindeers