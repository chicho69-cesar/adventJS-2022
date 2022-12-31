function checkPart(part) {
  let isPalindromePart = part.split('').reverse().join('') === part
  if (isPalindromePart) return true

  let band = false

  let arr = part.split('')
  let arr2 = [ ...arr ]

  for (let i = 0; i < part.length; i++) {
    arr2.splice(i, 1)
    band = arr2.join('').split('').reverse().join('') === arr2.join('')
    if (band) return true
    arr2 = [ ...arr ]
  }

  return band
}

module.exports = checkPart