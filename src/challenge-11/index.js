function getCompleted(part, total) {
  const gcd = (a, b) =>  b === 0 ? a : gcd(b, a % b)

  const partInSeconds = part
    .split(':')
    .reduce((acc, current, index) => {
      return acc + current * 60 ** (2 - index)
    }, 0)
    
  const totalInSeconds = total
    .split(':')
    .reduce((acc, current, index) => {
      return acc + current * 60 ** (2 - index)
    }, 0)

  const gcdOfPartAndTotal = gcd(partInSeconds, totalInSeconds)
  const numerator = partInSeconds / gcdOfPartAndTotal
  const denominator = totalInSeconds / gcdOfPartAndTotal

  return `${ numerator }/${ denominator }`
}

module.exports = getCompleted