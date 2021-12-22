const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const T = +inputs[0]
  for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = inputs[i].split(' ').map((i) => +i)
    const 두점사이의거리 = Math.sqrt(
      Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
    )
    const 반지름의합 = r1 + r2
    const 반지름의차 = Math.abs(r1 - r2)
    if (반지름의차 > 두점사이의거리) {
      console.log(0)
    } else if (반지름의차 < 두점사이의거리 && 반지름의합 > 두점사이의거리) {
      console.log(2)
      //내접, 외접인경우
    } else if (반지름의차 === 두점사이의거리 || 반지름의합 === 두점사이의거리) {
      if (x1 === x2 && y1 === y2) console.log(-1)
      else console.log(1)
    } else if (반지름의합 < 두점사이의거리) {
      console.log(0)
    }
  }

  process.exit()
})
