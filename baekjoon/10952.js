const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  input = input.map((x) => x.split(' ').map((y) => Number(y)))
  let i = 0
  while (!(input[i][0] === 0 && input[i][1] === 0)) {
    const [A, B] = input[i]
    console.log(A + B)
    i++
  }
  process.exit()
})
