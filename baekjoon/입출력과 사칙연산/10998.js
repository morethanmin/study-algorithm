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
  const [a, b] = input[0].split(' ').map((i) => parseInt(i))
  console.log(a * b)
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
