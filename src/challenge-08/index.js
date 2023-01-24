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

function checkPartAlt1(part) {
  return [ ...part ].some((_, i, arr) => {
    let w = arr.filter((_, y) => y != i)
    return w.join("") == w.reverse().join("")
  })
}

function checkPartAlt2(part) {
  let counter = 0
  const reversedArray = part.split('').reverse()
  
  return part.split('').every((el, index, array) => {
    if (el === reversedArray[index]) return true
    else if (counter === 0) {
      array.splice(index, 1)
      reversedArray.splice(reversedArray.length - 1 - index, 1)
      reversedArray.splice(index, 1)
      array.splice(reversedArray.length - 1 - index, 1)
      counter++
      return true
    } else return false
  })
}

module.exports = checkPart