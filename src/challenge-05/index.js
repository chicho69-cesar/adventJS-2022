function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let diferentWays = []
  
  diferentWays.push([], [ giftsCities[0] ])
  giftsCities.shift()

  giftsCities.forEach(gift => {
    const listOfNewGifts = diferentWays.map(way => {
      let option = [ ...way ]
      if (option.length < maxCities) {
        option.push(gift)
      }

      return option
    })

    diferentWays = diferentWays.concat(listOfNewGifts)
  })

  diferentWays.shift()

  const sumMax = Math.max(
    ...diferentWays.map(way => {
      let sum = way.reduceRight((acc, current) => acc + current)
      return sum > maxGifts ? 0 : sum
    })
  )

  return sumMax
}

module.exports = getMaxGifts