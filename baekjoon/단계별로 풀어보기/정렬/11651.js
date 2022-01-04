const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const N = inputs.shift()
  const sortedInputs = inputs.sort((cor, nextCor) => {
    const [x, y] = cor.split(' ').map((i) => Number(i))
    const [nextX, nextY] = nextCor.split(' ').map((i) => Number(i))
    if (y === nextY)
      return x - nextX
    else
      return y - nextY
  })
  console.log(sortedInputs.join('\n'));
  process.exit()
})