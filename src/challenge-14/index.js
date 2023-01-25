function getOptimalPath(path) {
  const optimalPath = path.reverse().reduce((acc, current) => {
    return current.map((value, index) => {
      return value + Math.min(acc[index], acc[index + 1])
    })
  })

  return optimalPath.pop()
}

function getOptimalPathAlt(path) {
  const res = path.reduceRight((previous, current) => {
    return current.map((val, index) => {
      return val + Math.min(previous[index], previous[index + 1])
    })
  })
  return res[0]
}

module.exports = getOptimalPath