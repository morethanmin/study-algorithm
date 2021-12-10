const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const handleInput = (line) => {
  input.push(Number(line))
}
const handleOutput = () => {
  let max = 0
  let cur = 0
  for (let i = 0; i < 9; i++) {
    if (input[i] > max) {
      max = input[i]
      cur = i + 1
    }
  }
  console.log(max)
  console.log(cur)
}

rl.on('line', handleInput).on('close', handleOutput)
