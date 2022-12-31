function printTable(gifts) {
  let table = ''

  let names = [ 
    'Gift', 
    ...gifts.map(gift => gift.name) 
  ]

  let quantities = [ 
    'Quantity', 
    ...gifts.map(gift => `${ gift.quantity }`) 
  ]

  let maxName = Math.max(...names.map(n => n.length))
  let maxQuantity = Math.max(...quantities.map(n => n.length))

  const leftSpaces = times => 
    ' '.repeat(maxName - times)

  const rightSpaces = times => 
    ' '.repeat(maxQuantity - times)

  let plusString = new Array(
    maxName + maxQuantity + 7
  ).fill('+').join('')

  let asteriskString = new Array(
    maxName + maxQuantity + 7
  ).fill('*').join('')

  table += plusString + '\n'
  
  table += '| Gift' 
    + leftSpaces('Gift'.length) 
    + ' | '

  table += 'Quantity' 
    + rightSpaces('Quantity'.length) 
    + ' |\n'
  
  table += '| ' + '-'.repeat(maxName) + ' | '
  table += '-'.repeat(maxQuantity) + ' |\n'

  gifts.forEach(gift => {
    table += `| ${ gift.name }` 
      + leftSpaces((gift.name).length) 
      + ' | '
    
    table += `${ gift.quantity }` 
      + rightSpaces((`${ gift.quantity }`).length) 
      + ' |\n'
  })

  table += asteriskString

  return table
}

module.exports = printTable