const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [A, B, C] = input[0].split(' ').map((val) => parseInt(val))
  if (B >= C) console.log(-1)
  else {
    console.log(Math.floor(A / (C - B) + 1))
  }
  process.exit()
})

// A + B * n < C * n
// A / (C - B) < n
