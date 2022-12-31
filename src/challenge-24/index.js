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

module.exports = canExit