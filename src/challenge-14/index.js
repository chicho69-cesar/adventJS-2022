function getOptimalPath(path) {
  const optimalPath = path.reverse().reduce((acc, current) => {
    return current.map((value, index) => {
      return value + Math.min(acc[index], acc[index + 1])
    })
  })

  return optimalPath.pop()
}

module.exports = getOptimalPath