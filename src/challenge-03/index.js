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

function distributeGiftsAlt1(packOfGifts, reindeers) {
  return (reindeers.join('').length * 2 / packOfGifts.join('').length) << 0
}

function distributeGiftsAlt2(packOfGifts, reindeers) {
  let pesoMax = reindeers.join("").length * 2
  let pesoCaja = packOfGifts.join("").length
  return (pesoMax / pesoCaja) >> 0
}

module.exports = distributeGifts