function checkPart(part: string): boolean {
  let isPalindromePart: boolean = part
    .split('')
    .reverse()
    .join('') === part;

  if (isPalindromePart) return true;

  let band: boolean = false;

  let arr: string[] = part.split('');
  let arr2: string[] = [ ...arr ];

  for (let i: number = 0; i < part.length; i++) {
    arr2.splice(i, 1);

    band = arr2
      .join('')
      .split('')
      .reverse()
      .join('') === arr2.join('');

    if (band) return true;
    arr2 = [ ...arr ];
  }

  return band;
}