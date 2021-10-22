const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const C = parseInt(input[0])
  for (i = 1; i <= C; i++) {
    const TC = input[i].split(' ').map((item) => parseInt(item))
    const N = parseInt(TC[0])
    let sum = 0
    for (j = 1; j <= N; j++) {
      sum += TC[j]
    }
    let avg = sum / N
    const mtAvg = (TC.slice(1).filter((item) => item > avg).length / N) * 100
    console.log(`${mtAvg.toFixed(3)}%`)
  }
  process.exit()
})
