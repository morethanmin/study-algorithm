const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const X = parseInt(input[0])
  let count = 0
  let range = 0
  while (count < X) {
    range++
    for (let i = 1; i <= range; i++) {
      count++
      if (count === X) {
        if (range % 2 == 0) console.log(`${i}/${range + 1 - i}`)
        else console.log(`${range + 1 - i}/${i}`)
        break
      }
    }
  }

  process.exit()
})
