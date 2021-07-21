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
  const [N, M] = input[0].split(' ').map((x) => Number(x))

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {}
  }

  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
