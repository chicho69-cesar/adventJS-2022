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

module.exports = fixLetter