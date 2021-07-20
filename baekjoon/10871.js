const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  let [N, X] = input[0].split(' ')
  N = Number(N)
  X = Number(X)
  let A = input[1].split(' ').map((x) => Number(x))
  let result = []
  for (i = 0; i < N; i++) {
    if (A[i] < X) result.push(A[i])
  }
  console.log(result.join(' '))
  process.exit()
})
