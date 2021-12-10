const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = Number(input[0])
  let array = []
  let rank = new Array(N).fill(1)
  for (let i = 1; i <= N; i++) {
    array.push(input[i].split(' ').map((x) => Number(x)))
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (j === i) continue
      if (array[i][0] < array[j][0] && array[i][1] < array[j][1]) rank[i]++
    }
  }
  console.log(rank.join(' '))
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
