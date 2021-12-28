const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  input.shift()
  const array = input.map((i) => +i)

  console.log(array.sort((a, b) => a - b).join('\n'))
  process.exit()
})
