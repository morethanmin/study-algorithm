const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const isRight = (board, cur_line, pos) => {
  for (let b = 0; b < cur_line; b++) {
    if (board[b] === pos) return false
    if (Math.abs(b - cur_line) === Math.abs(board[b] - pos)) return false
  }
  return true
}

const put_Queen = (cur_line, board) => {
  let count = 0
  let len = board.lenght
  if (cur_line === len) return 1
  else {
    for (let i = 0; i < len; i++) {
      board[cur_line] = i
      if (isRight(board, cur_line, i)) {
        count += put_Queen(cur_line + 1, board)
      }
    }
    console.log(board)
  }

  return count
}

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = Number(input[0])
  let board = new Array(N)
  let count = 0
  for (let i = 0; i < N; i++) {
    board[0] = i
    count += put_Queen(1, board)
  }
  console.log(count)
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
