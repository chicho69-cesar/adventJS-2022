function countHours(year, holidays) {
  let hours = holidays.reduce((acc, el) => {
    let valuesForDate = el.split('/')
    let date = new Date(year, +(valuesForDate[0]) - 1, +(valuesForDate[1]))

    return date.getDay() === 0 || date.getDay() === 6
      ? acc + 0
      :  acc += 2
  }, 0)
    
  return hours
}

module.exports = countHours