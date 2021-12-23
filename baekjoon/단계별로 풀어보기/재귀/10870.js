const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const getPbonachi = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  return getPbonachi(n - 1) + getPbonachi(n - 2)
}

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const n = +input[0]
  console.log(getPbonachi(n))
  process.exit()
})
