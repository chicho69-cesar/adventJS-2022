function sortToys(toys, positions) {
  let map = {}

  toys.forEach((toy, i) => {
    map[positions[i]] = toy
  })

  return Object.values(map)
}

function sortToysAlt1(toys, positions) {
  return toys.sort((a, b) => 
    positions[toys.indexOf(a)] -
    positions[toys.indexOf(b)]
  )
}

module.exports = sortToys