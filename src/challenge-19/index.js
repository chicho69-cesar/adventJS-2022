function sortToys(toys, positions) {
  let map = {}

  for (let i = 0; i < toys.length; i++) {
    map[positions[i]] = toys[i]
  }

  return Object.values(map)
}

module.exports = sortToys