const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const handleInputLine = (line) => {
  let N = Number(line)
  let i = 0,
    sum = 0
  while (true) {
    i++
    sum = Math.floor(N / 10) + (N % 10)
    N = (N % 10) * 10 + (sum % 10)
    if (N === Number(line)) break
  }
  console.log(i)
}
const handleOutputLine = () => {
  process.exit()
}

rl.on('line', handleInputLine).on('close', handleOutputLine)
