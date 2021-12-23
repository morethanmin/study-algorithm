const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const getStar = (x, y, n) => {
  //n * n
  if (x % 3 == 1 && y % 3 == 1) return ' '
  else {
    if (n === 1) {
      return '*'
    } else {
      return getStar(parseInt(x / 3), parseInt(y / 3), parseInt(n / 3))
    }
  }
}

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = +input[0]
  // console.log(getStar(N))
  let result = ''
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      result += getStar(x, y, N)
    }
    result += `\n`
  }
  console.log(result)
  process.exit()
})
