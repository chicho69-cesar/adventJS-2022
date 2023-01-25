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

function howManyReindeersAlt(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)

  const traverse = (reindeers, weight) => {
    reindeerTypes.forEach(({ weightCapacity }, i) => {
      if (weight - weightCapacity >= 0) {
        reindeers[i].num += 1
        weight -= weightCapacity
      }
    })
    return weight > 0
      ? traverse(reindeers, weight)
      : reindeers
  }

  return gifts.map(({ country, weight }) => {
    const result = traverse(reindeerTypes.map(({ type }) => {
      return {
        type: type,
        num: 0
      }
    }), weight)
    return {
      country: country,
      reindeers: result.reverse().filter(({ num }) => !!num)
    }
  })
}

module.exports = howManyReindeers