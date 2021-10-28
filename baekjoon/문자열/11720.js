const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = input[1].split('').map((x) => parseInt(x))
  const result = N.reduce((prev, cur) => prev + cur, 0)
  console.log(result)
  process.exit()
})
