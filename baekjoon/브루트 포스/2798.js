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
  const num = input[1].split(' ').map((x) => Number(x))
  let max = 0
  for (let x = 0; x < N - 2; x++) {
    for (let y = x + 1; y < N - 1; y++) {
      for (let z = y + 1; z < N; z++) {
        let sum = num[x] + num[y] + num[z]
        if (sum > max && sum <= M) {
          max = sum
        }
      }
    }
  }
  console.log(max)
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
