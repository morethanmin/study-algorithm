const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const N = Number(input[0])
  let star = new Array(N).fill(' ')
  for (i = N - 1; i >= 0; i--) {
    star[i] = '*'
    console.log(star.join(''))
  }
  process.exit()
})
