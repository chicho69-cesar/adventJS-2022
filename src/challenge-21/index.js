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

function printTableAlt(gifts) {
  gifts = gifts.map(x => [x.name, '' + x.quantity])
  gifts.unshift(["Gift", "Quantity"])

  let lengthGift = Math.max(...gifts.map(x => x[0].length))
  let lengthQuantity = Math.max(...gifts.map(x => x[1].length))

  gifts.splice(1, 0, ["-".repeat(lengthGift), "-".repeat(lengthQuantity)])

  let tables = gifts.reduce((str, x) => str +
    "| " + x[0].padEnd(lengthGift) +
    " | " + x[1].padEnd(lengthQuantity) +
    " |" + "\n", ''
  )

  let top = "+".repeat(lengthGift + lengthQuantity + 7) + "\n"
  let bottom = "*".repeat(lengthGift + lengthQuantity + 7)

  return top + tables + bottom
}

module.exports = printTable