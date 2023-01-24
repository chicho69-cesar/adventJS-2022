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

function getMaxGiftsAlt1(giftsCities, maxGifts, maxCities) { 
  return Math.max(
    ...giftsCities
      .sort((x, y) => y - x)
      .reduce(
        (result, _, i) => (
          i && giftsCities.unshift(giftsCities.pop()),
          (i = giftsCities
            .slice(0, maxCities)
            .reduce((acc, curr) => (acc += curr), 0)),
          i <= maxGifts && result.push(i),
          i - giftsCities[maxCities - 1] <= maxGifts &&
          result.push(i - giftsCities[maxCities - 1]),
          result
        ),
        []
      ),
    0
  );
}

function getMaxGiftsAlt2(giftsCities, maxGifts, maxCities) {
  let counter = 0
  let sum = 0

  return giftsCities.reduce((acc, curr, index) => {
    if (acc < curr && curr <= maxGifts) acc = curr
    sum = curr
    counter++
    giftsCities.forEach((secondCity, index2) => {
      if (index2 === index) return acc
      if (counter < maxCities && ((sum + secondCity) <= maxGifts)) {
        sum += secondCity
        counter++
        if (counter <= maxCities) {
          if (acc < sum && sum <= maxGifts) {
            acc = sum
          }
        }
      }
    })
    counter = 0
    return acc
  }, 0)
}


module.exports = getMaxGifts