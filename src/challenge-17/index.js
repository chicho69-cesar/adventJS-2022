function carryGifts(gifts, maxWeight) {
  if (!gifts.every(gift => maxWeight >= gift.length)) {
    return []
  }

  let carried = ['']

  gifts.map(gift => {
    const prevWeight = carried.at(-1).replace(' ', '').length
    
    if ((prevWeight + gift.length) <= maxWeight) {
      carried[carried.length - 1] += ' ' + gift
      carried[carried.length - 1] = carried[carried.length - 1].trim()
      return
    }

    carried.push(gift)
  })

  return carried
}

function carryGiftsAlt(gifts, maxWeight) {
  const regex = new RegExp(`\\b(\\w ?){1,${ maxWeight }}(?= |$)`, 'g')
  return gifts.join(' ').match(regex) || []
}

module.exports = carryGifts