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

function getCompletedAlt1(part, total) {
  const MCD = (a, b) => {
    let c;
    while (b) {
      c = b
      b = a % b
      a = c
    }
    return a
  }

  part = part.split(":")
  total = total.split(":")

  let partRed = +part[0] * 3600 + +part[1] * 60 + +part[2]
  let totalRed = +total[0] * 3600 + +total[1] * 60 + +total[2]
  const MCDof = MCD(partRed, totalRed)

  const partEnd = partRed / MCDof
  const totalEnd = totalRed / MCDof

  return partEnd + "/" + totalEnd
}

function getCompletedAlt2(part, total) {
  const partToSeconds = part.split(':')
    .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)
  const totalToSeconds = total.split(':')
    .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)

  let a = partToSeconds
  let b = totalToSeconds

  while (b) {
    let t = b
    b = a % b
    a = t
  }

  return `${partToSeconds / a}/${totalToSeconds / a}`
}

module.exports = getCompleted