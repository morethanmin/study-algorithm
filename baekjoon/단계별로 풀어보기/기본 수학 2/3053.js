const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const R = +input[0]

  console.log(`${Math.PI * R * R}\n${R * R * 2}`)

  process.exit()
})
