function createCube(size) {
  let firstPart = []
  let secondPart = []

  for (let i = 1; i <= size; i++) {
    firstPart.push(
      " ".repeat(size - i) + 
      "/\\".repeat(i) + 
      "_\\".repeat(size)
    )
    
    secondPart.push(
      " ".repeat(i - 1) + 
      "\\/".repeat(size + 1 - i) + 
      "_/".repeat(size)
    )
  }

  let result = [ ...firstPart, ...secondPart ]

  return result.join("\n")
}

module.exports = createCube