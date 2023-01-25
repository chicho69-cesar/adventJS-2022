function dryNumber(dry, numbers) {
  let afected = []

  for (let i = 1; i <= numbers; i++) {
    if (`${ i }`.includes(`${ dry }`)) {
      afected.push(i)
    }
  }

  return afected
}

function dryNumberAlt1(dry, numbers) {
  return Array.from(Array(numbers).keys())
    .filter(x => `${ x + 1 }`.split("").includes(`${ dry }`))
    .map(x => x + 1)
}

function dryNumberAlt2(dry, numbers) {
  return [ ...Array(numbers + 1).keys() ]
    .slice(1)
    .filter(x => (x + '').includes(dry))
}

module.exports = dryNumber