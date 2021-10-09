const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = parseInt(input[0])
  for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map((j) => parseInt(j))
    console.log(`Case #${i}: ${A + B}`)
  }
  process.exit()
})
