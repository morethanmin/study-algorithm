const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function (line) {
  const [A, B] = line.split(' ').map((x) => Number(x))
  console.log(A + B)
}).on('close', process.exit)
