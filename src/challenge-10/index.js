function checkJump(heights) {
  let max = Math.max(...heights)
  let pos = heights.indexOf(max)

  let part1 = heights.slice(0, pos)
  let part2 = heights.slice(pos, heights.length)

  let con1 = part1.every(function(_, i) {
    return i == 0 || part1[i] >= part1[i - 1]
  })

  let con2 = part2.every(function(_, i) {
    return i == 0 || part2[i] <= part2[i - 1]
  })

  return con1 && con2 && !!part1.length && part2.length > 1
}

module.exports = checkJump