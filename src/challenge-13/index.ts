function getFilesToBackup(lastBackup: number, changes: [ number, number ]): number[] {
  let flattenChanges: {} = {};

  changes.forEach((change: number) => {
    if (change[1] > lastBackup) {
      flattenChanges[change[0]] = change[1];
    }
  });
  
  let changesToBackup: string[] = Object.keys(flattenChanges);

  return changesToBackup.map(c => +c);
}