const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const A = input[0]
  console.log(A.charCodeAt())
  process.exit()
})
