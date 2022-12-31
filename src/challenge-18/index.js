function dryNumber(dry, numbers) {
  let afected = []

  for (let i = 1; i <= numbers; i++) {
    if (`${ i }`.includes(`${ dry }`)) {
      afected.push(i)
    }
  }

  return afected
}

module.exports = dryNumber