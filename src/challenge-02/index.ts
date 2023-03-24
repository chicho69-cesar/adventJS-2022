function countHours(year: number, holidays: string[]): number {
  let hours: number = holidays.reduce((acc: number, el: string) => {
    let valuesForDate: string[] = el.split('/');
    let date: Date = new Date(year, +(valuesForDate[0]) - 1, +(valuesForDate[1]));

    return date.getDay() === 0 || date.getDay() === 6
      ? acc + 0
      :  acc += 2;
  }, 0);
    
  return hours;
}