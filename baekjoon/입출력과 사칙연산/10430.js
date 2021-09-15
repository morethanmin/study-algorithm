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
  let [A, B, C] = input[0].split(' ').map((i) => parseInt(i))

  console.log((A + B) % C)
  console.log(((A % C) + (B % C)) % C)
  console.log((A * B) % C)
  console.log(((A % C) * (B % C)) % C)
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
