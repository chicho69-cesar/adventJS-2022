function canExit(maze) {
  const envolve = new Array(maze.length + 2).fill('W')
  
  maze = [
    envolve, 
    ...maze.map(row => ['W', ...row, 'W']),
    envolve
  ]

  const moves = [
    [-1, 0], 
    [1, 0], 
    [0, -1], 
    [0, 1]
  ]

  function couldWeExit(maze, row, col) {
    return (maze[row][col] === 'E') || (
      (maze[row][col] === ' ') && 
      (maze[row][col] = '.') && 
      moves.some(([deltaRow, deltaCol]) => 
        couldWeExit(maze, row + deltaRow, col + deltaCol)
      )
    )
  }

  const startRow = maze.findIndex(
    columns => columns.find(c => c === 'S')
  )

  const startCol = maze[startRow].findIndex(
    cell => cell === 'S'
  )

  maze[startRow][startCol] = ' '

  const canExitNow = couldWeExit(
    maze, 
    startRow, 
    startCol
  )

  return canExitNow
}

function canExitAlt(maze) {
  function fillPath(line) {
    return line
      .join("")
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("")
  }
  
  const x = maze[0].length
  const y = maze.length
  const area = x * y

  new Array(area).fill('').forEach(() => {
    maze.map((hor, i) => {
      maze[i] = fillPath(hor)
      maze[i] = maze[i]
        .map((_, j) => fillPath(maze.map(x => x[j]))[i])
    })
  })

  return !maze.flat(2).includes("E")
}

module.exports = canExit