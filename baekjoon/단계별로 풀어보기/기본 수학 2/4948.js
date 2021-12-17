const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    const n = parseInt(input[i])
    if (n === 0) break
    let isSosu = Array(2 * n + 1).fill(true)
    isSosu[1] = false
    for (let j = 2; j <= Math.sqrt(2 * n); j++) {
      if (isSosu[j]) {
        let m = 2
        while (j * m <= 2 * n) {
          isSosu[j * m] = false
          m++
        }
      }
    }
    let result = 0
    // console.log(isSosu)
    isSosu
      .slice(n, 2 * n + 1)
      .reduce((acc, cur) => (cur === true ? result++ : null))
    console.log(result)
  }
})
