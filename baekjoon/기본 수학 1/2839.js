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
  let bongji = []
  for (let x = 0; x <= N / 5; x++) {
    for (let y = 0; y <= N / 3; y++) {
      if (5 * x + 3 * y === N) bongji.push([x, y])
    }
  }
  if (bongji.length) {
    const result = bongji.reduce((acc, cur) =>
      acc[0] + acc[1] < cur[0] + cur[1] ? acc : cur
    )
    console.log(result[0] + result[1])
  } else console.log(-1)

  process.exit()
})
