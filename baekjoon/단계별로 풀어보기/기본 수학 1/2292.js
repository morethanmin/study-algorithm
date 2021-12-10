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
  let range = 1
  let count = 1
  while (N > range) {
    range = range + 6 * count
    count = count + 1
  }
  console.log(count)

  process.exit()
})

// 1 7 19 37 61
// +6 +12 +18
