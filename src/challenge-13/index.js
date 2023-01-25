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

function getFilesToBackupAlt1(lastBackup, changes) {
  return [...new Set([ ...changes
      .filter(item => item[1] > lastBackup)
      .map(item => item[0])
    ].sort((a, b) => a - b)
  )]
}

function getFilesToBackupAlt2(lastBackup, changes) {
  let filtered = changes.filter(x => x[1] > lastBackup)
  let ids = filtered.map(x => x[0])
  let sorted = ids.sort((a, b) => a - b)
  let flated = [ ...new Set(sorted) ]

  return flated
}

module.exports = getFilesToBackup