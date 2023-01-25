function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames.every((e, i) => 
    stepNumbers[i] < stepNumbers[
      i + systemNames.slice(i + 1).indexOf(e) + 1
    ] + !(systemNames.lastIndexOf(e) - i)
  )
}

function checkStepNumbersAlt(systemNames, stepNumbers) {
  const baseObject = Object.assign({},
    ...systemNames.map((name, i) => ({ [name]: [] }))
  )

  return Object.values(systemNames.reduce((acc, curr, i) => {
    acc[curr] = [ ...acc[curr], stepNumbers[i] ]
    return acc
  }, baseObject))
    .every((c) => c.slice(1).every((next, i) => next >= c[i]))
}

module.exports = checkStepNumbers