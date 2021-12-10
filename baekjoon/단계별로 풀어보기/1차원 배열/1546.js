const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = parseInt(input[0])
  const scores = input[1].split(' ').map((i) => parseInt(i))
  const max = Math.max(...scores)

  for (i in scores) {
    scores[i] = (scores[i] / max) * 100
  }
  const sum = scores.reduce((prev, cur) => prev + cur)
  console.log(sum / scores.length)
  process.exit()
})
