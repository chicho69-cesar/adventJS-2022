function fixLetter(letter) {
  const fixedLetter = letter
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\?+/g, '?')
    .replace(/,\s{0,1}/g, ', ')
    .replace(/([a-z])$/gi, '$1.')
    .replace(/\s{1}([,.\?\!])/g, '$1')
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/[\?\!.]+\s[a-z]|^[a-z]/gi, c => c.toUpperCase())

  return fixedLetter
}

function fixLetterAlt(letter) {
  let correction = letter
    .replace(/([,.?!])([^,.?!])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .replace(/([,.?!]{2,})/g, $1 => $1[0])
    .replace(/([.?!])(\s)([A-z])/g,
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    .replace(/(santa claus)/gi, 'Santa Claus')
    .trim()
    .replace(/\s([,.?!])/g, '$1')
    .replace(/^([A-z])/g, $1 => $1.toUpperCase())
    .replace(/([^.?!])$/g, '$1.')

  return correction
}

module.exports = fixLetter