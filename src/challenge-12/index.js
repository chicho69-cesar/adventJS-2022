function selectSleigh(distance, sleighs) {
  let filtered = sleighs.filter(sl => sl.consumption * distance <= 20)
  let result = filtered.at(-1)
  return result ? result.name : null
}

module.exports = selectSleigh