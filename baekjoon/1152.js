const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const handleInput = (line) => {
  const input = line.trim().split(' ')
  if (input[0] === '') console.log(0)
  else console.log(input.length)
}

const handleOutput = () => {}

rl.on('line', handleInput).on('close', handleOutput)
