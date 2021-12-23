const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const getFactorial = (N) => {
  if (N < 2) return 1

  return N * getFactorial(N - 1)
}

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = +input[0]
  console.log(getFactorial(N))
  process.exit()
})
