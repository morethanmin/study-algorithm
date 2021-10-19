const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let result = new Set()
rl.on('line', (line) => {
  result.add(parseInt(line) % 42)
}).on('close', () => {
  console.log(Array.from(result).length)
  process.exit()
})
