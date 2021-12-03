const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [A, B, V] = input[0].split(' ').map((i) => parseInt(i))

  console.log(Math.ceil((V - A) / (A - B)) + 1)

  process.exit()
})
