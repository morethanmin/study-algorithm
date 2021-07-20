const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(Number(line))
}).on('close', function () {
  const num = input[0]
  for (i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
  }

  process.exit()
})
