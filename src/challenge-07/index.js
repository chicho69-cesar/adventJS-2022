function getGiftsToRefill(a1, a2, a3) {
  let setted = [
    ...new Set(a1), 
    ...new Set(a2), 
    ...new Set(a3)
  ]

  let uniqueGifts = setted.filter(gift => 
    a1.includes(gift) + a2.includes(gift) + a3.includes(gift) < 2
  )

  return uniqueGifts
}

module.exports = getGiftsToRefill