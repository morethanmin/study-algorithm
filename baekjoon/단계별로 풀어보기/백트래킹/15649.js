const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const [N, M] = inputs[0].split(' ').map((i) => +i)
  let result = []
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) continue
      result.push(`${i} ${j}`)
    }
  }
  console.log(result)

  process.exit()
})
