function wrapping(gifts) {
  return gifts.map(g => {
    let envolve = (new Array(g.length + 2).fill('*')).join('')
    return `${ envolve }\n*${ g }*\n${ envolve }`
  })
}

module.exports = wrapping