function distributeGifts(packOfGifts, reindeers) {
  let heightOfGifts = packOfGifts.reduce((acc, current) => {
    return acc + current.length
  }, 0)

  let heightOfReinders = reindeers.reduce((acc, current) => {
    return acc + (current.length * 2)
  }, 0)

  let moduleOperation = (heightOfReinders % heightOfGifts)
  let maxPacks = (heightOfReinders - moduleOperation) / heightOfGifts

  return maxPacks
}

module.exports = distributeGifts