const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  outpu: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [M, N] = input[0].split(' ').map(Number)
  const isSosu = Array(N + 1).fill(true)
  isSosu[1] = false

  for (let n = 2; n <= Math.ceil(Math.sqrt(N)); n++) {
    if (isSosu[n]) {
      let m = 2
      while (n * m <= N) {
        isSosu[n * m] = false
        m++
      }
    }
  }

  const results = []
  for (let n = M; n <= N; n++) {
    if (isPrimeNumber[n]) {
      results.push(n)
    }
  }
  console.log(results.join('\n'))

  process.exit()
})
