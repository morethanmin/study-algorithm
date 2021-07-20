const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line.split(' '))
}).on('close', function () {
  let [H, M] = input[0]

  M = M - 45
  if (M < 0) {
    M = M + 60
    H = H - 1
    if (H === -1) H = 23
  }
  console.log(`${H} ${M}`)
  process.exit()
})
