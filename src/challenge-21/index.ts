type Gift = {
  name: string;
  quantity: number;
}

function printTable(gifts: Gift[]): string {
  let table: string = '';

  let names: string[] = [ 
    'Gift', 
    ...gifts.map((gift: Gift) => gift.name) 
  ];

  let quantities: string[] = [ 
    'Quantity', 
    ...gifts.map((gift: Gift) => `${ gift.quantity }`) 
  ];

  let maxName: number = Math.max(...names.map(n => n.length));
  let maxQuantity: number = Math.max(...quantities.map(n => n.length));

  const leftSpaces = (times: number) => 
    ' '.repeat(maxName - times);

  const rightSpaces = (times: number) => 
    ' '.repeat(maxQuantity - times);

  let plusString: string = new Array(
    maxName + maxQuantity + 7
  ).fill('+').join('');

  let asteriskString: string = new Array(
    maxName + maxQuantity + 7
  ).fill('*').join('');

  table += plusString + '\n';
  
  table += '| Gift' 
    + leftSpaces('Gift'.length) 
    + ' | ';

  table += 'Quantity' 
    + rightSpaces('Quantity'.length) 
    + ' |\n';
  
  table += '| ' + '-'.repeat(maxName) + ' | ';
  table += '-'.repeat(maxQuantity) + ' |\n';

  gifts.forEach((gift: Gift) => {
    table += `| ${ gift.name }` 
      + leftSpaces((gift.name).length) 
      + ' | ';
    
    table += `${ gift.quantity }` 
      + rightSpaces((`${ gift.quantity }`).length) 
      + ' |\n';
  });

  table += asteriskString;

  return table;
}