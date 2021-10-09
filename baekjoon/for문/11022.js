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
  for (i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map((j) => parseInt(j))
    const C = A + B
    console.log(`Case #${i}: ${A} + ${B} = ${C}`)
  }
  process.exit()
})
