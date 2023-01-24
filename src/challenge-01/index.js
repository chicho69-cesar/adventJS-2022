function wrapping(gifts) {
  return gifts.map(g => {
    let envolve = (new Array(g.length + 2).fill('*')).join('')
    return `${ envolve }\n*${ g }*\n${ envolve }`
  })
}

const wrappingAlt = gifts => {
  return gifts.map((gift) => {
    const wrapping = "*".repeat(gift.length + 2)
    return (`${ wrapping }\n*${ gift }*\n${ wrapping }`)
  })
}

module.exports = wrapping