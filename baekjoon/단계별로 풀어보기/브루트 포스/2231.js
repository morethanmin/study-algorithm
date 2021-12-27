const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  let N = +input[0]
  let result = 0
  for (let i = N - 1; i > 0; i--) {
    let nums = []
    let curVal = i
    while (curVal !== 0) {
      const nmg = curVal % 10
      curVal = parseInt(curVal / 10)
      nums.push(nmg)
    }
    if (N === i + nums.reduce((acc, cur) => acc + cur)) {
      result = i
    }
  }
  console.log(result)

  process.exit()
})
