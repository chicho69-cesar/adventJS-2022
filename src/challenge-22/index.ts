function checkStepNumbers(systemNames: string[], stepNumbers: number[]): boolean {
  return systemNames.every((e: string, i: number) => 
    stepNumbers[i] < stepNumbers[
      i + systemNames.slice(i + 1).indexOf(e) + 1
    ] + (+!(systemNames.lastIndexOf(e) - i))
  )
}