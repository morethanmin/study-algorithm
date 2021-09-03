const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const fibo = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fibo(n - 1) + fibo(n - 2)
}

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = Number(input[0])
  console.log(fibo(N))

  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
