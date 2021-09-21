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
  const [A, B] = input[0].split(' ').map((i) => parseInt(i))
  if (A > B) {
    console.log('>')
  }
  if (A < B) {
    console.log('<')
  }
  if (A === B) {
    console.log('==')
  }
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
