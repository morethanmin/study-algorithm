const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = parseInt(input[0])
  if (N === 1) process.exit()
  let dividedValue = N
  let result = ''
  for (let i = 2; i <= Math.sqrt(dividedValue); i++) {
    if (dividedValue % i === 0) {
      dividedValue = dividedValue / i
      result += `${i}\n`
      i = 1
    }
  }
  result += `${dividedValue}`
  console.log(result)
  process.exit()
})
