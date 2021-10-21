const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = parseInt(input[0])
  let result = ''
  for (i = 1; i <= T; i++) {
    let score = 0
    let sum = 0
    for (j = 0; j < input[i].length; j++) {
      if (input[i][j] === 'O') {
        score = score + sum + 1
        sum++
      } else {
        sum = 0
      }
    }
    result = result + `${score}\n`
  }
  console.log(result)
  process.exit()
})
