const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [x, y, w, h] = input[0].split(' ').map((i) => +i)
  let dis = []
  dis.push(Math.abs(x - w))
  dis.push(Math.abs(y - h))
  dis.push(x)
  dis.push(y)
  let min = 1000
  for (let i = 0; i < dis.length; i++) {
    if (dis[i] < min) min = dis[i]
  }
  console.log(min)
  process.exit()
})
