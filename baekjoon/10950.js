const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const T = Number(input[0])
  for (i = 0; i < T; i++) {
    const [A, B] = input[i + 1].split(' ')
    console.log(Number(A) + Number(B))
  }
  process.exit()
})
