const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const foo = (n) => {
  if (n === 0) return 1
  if (n === 1) return 1
  else return n * foo(n - 1)
}

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = Number(input[0])
  console.log(foo(N))
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
