function decorateTree(base) {
  let combinations = {
    'PP': 'P', 'RR': 'R', 'BB': 'B',
    'PB': 'R', 'BP': 'R', 'RP': 'B',
    'PR': 'B', 'BR': 'P', 'RB': 'P'
  }

  const result = [ base ]
  let baseToArray = base.split(' ')
  let list = new Array(baseToArray.length - 1).fill('')

  list.map(_ => {
    baseToArray = [ ...baseToArray ].splice(1).map((val, index) => {
      const key = baseToArray[index] + val
      const resultCombination = combinations[key]
      return resultCombination
    })

    result.push(baseToArray.join(' '))
  })

  return result.reverse()
}

module.exports = decorateTree