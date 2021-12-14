const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const M = parseInt(input[0]) < 2 ? 2 : parseInt(input[0])
  const N = parseInt(input[1])
  const result = []
  for (i = M; i <= N; i++) {
    let isSoSu = true
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isSoSu = false
        break
      }
    }
    if (isSoSu) {
      result.push(i)
    }
  }
  if (result.length) {
    console.log(
      `${result.reduce((acc, cur) => acc + cur)}\n${result.reduce((acc, cur) =>
        acc > cur ? cur : acc
      )}`
    )
  } else {
    console.log(-1)
  }

  process.exit()
})
