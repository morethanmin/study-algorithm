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
  const A = parseInt(input[0])
  const B = parseInt(input[1])

  const C = A * (B % 10)
  const D = A * (parseInt(B / 10) % 10)
  const E = A * (parseInt(parseInt(B / 10) / 10) % 10)
  const sum = A * B

  console.log(C)
  console.log(D)
  console.log(E)
  console.log(sum)
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
