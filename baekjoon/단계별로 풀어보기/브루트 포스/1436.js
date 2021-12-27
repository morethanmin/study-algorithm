const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = +input[0]
  let result = 666
  let count = 1
  while (count !== N) {
    result++
    if (`${result}`.includes(`666`)) {
      count++
    }
  }
  console.log(result)
  process.exit()
})
