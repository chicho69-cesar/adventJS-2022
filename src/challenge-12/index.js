function selectSleigh(distance, sleighs) {
  let filtered = sleighs.filter(sl => sl.consumption * distance <= 20)
  let result = filtered.at(-1)
  return result ? result.name : null
}

function selectSleighAlt1(distance, sleighs) {
  let sleigh = sleighs.filter(x => (20 / x.consumption) >= distance).at(-1)
  return sleigh ? sleigh.name : null
}

function selectSleighAlt2(distance, sleighs) {
  sleighs = sleighs.filter((x) => x.consumption * distance <= 20)
  sleighs.unshift({ name: null })
  return sleighs[sleighs.length - 1].name
}

function selectSleighAlt3(distance, sleighs) {
  const found = sleighs.reverse().find((x) => x.consumption * distance <= 20)
  return found ? found.name : null
}

module.exports = selectSleigh