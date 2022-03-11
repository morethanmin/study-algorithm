const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
input = input.map(row => row.split(' ').map(i => Number(i)));

function solution(board) {
  const zeroArr = getZeroArr(board)
  const N = zeroArr.length
  let answer = []

  function getZeroArr(board) {
    const zeroArr = []
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) zeroArr.push([i, j])
      }
    }
    return zeroArr;
  }

  function isPossible(x, y, val) {
    for (let i = 0; i < 9; i++) {
      if (board[x][i] === val) return false
    }
    for (let i = 0; i < 9; i++) {
      if (board[i][y] === val) return false
    }
    let boxX = Math.floor(x / 3) * 3
    let boxY = Math.floor(y / 3) * 3
    for (let i = boxX; i < boxX + 3; i++) {
      for (let j = boxY; j < boxY + 3; j++) {
        if (board[i][j] === val) return false1
      }
    }
    return true
  }

  function sudoku(n) {
    if (n === N) {
      for (var i = 0; i < 9; i++) {
        let rows = []
        for (var j = 0; j < 9; j++) {
          rows.push(board[i][j]);
        }
        answer.push(rows)
      }
      return
    } else {
      let [x, y] = zeroArr[n]
      for (let i = 1; i <= 9; i++) {
        if (isPossible(x, y, i)) {
          board[x][y] = i
          sudoku(n + 1)
          board[x][y] = 0
        }
      }
    }
  }
  sudoku(0)
  return answer
}
console.log(solution(input).map((row) => row.join(' ')).join('\n'))