function getFilesToBackup(lastBackup, changes) {
  let flattenChanges = {}

  changes.forEach(change => {
    if (change[1] > lastBackup) {
      flattenChanges[change[0]] = change[1]
    }
  })
  
  let changesToBackup = Object.keys(flattenChanges)

  return changesToBackup.map(c => +c)
}

module.exports = getFilesToBackup