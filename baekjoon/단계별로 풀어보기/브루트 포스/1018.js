const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [N, M] = input
    .shift()
    .split(' ')
    .map((i) => +i)
  const board = input
  let resultArr = []

  const whiteBoard = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ]
  const blackBoard = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ]
  const countNewPaint = (xStart, yStart, color) => {
    let result = 0
    if (color === 'white') {
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (whiteBoard[x][y] !== board[x + xStart][y + yStart]) result++
        }
      }
    }
    if (color === 'black') {
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (blackBoard[x][y] !== board[x + xStart][y + yStart]) result++
        }
      }
    }
    return result
  }

  for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
      resultArr.push(countNewPaint(i, j, 'white'))
      resultArr.push(countNewPaint(i, j, 'black'))
    }
  }
  console.log(Math.min.apply(null, resultArr))

  process.exit()
})
