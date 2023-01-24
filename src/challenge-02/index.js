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

function countHoursAlt1(year, holidays) {
  return holidays.map(holiday => {
    let date = new Date(`${ year }/${ holiday }`)
    return [ 1, 2, 3, 4, 5 ].includes(date.getDay())
  }).reduce((count, extraHour) => count + extraHour) * 2
}

function countHoursALt2(year, holidays) {
  return holidays
    .filter(diaMes => new Date(diaMes + "/" + year).getDay() % 6)
    .length * 2
}

module.exports = countHours