const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
  // N : 카드의 수, M : 목표 수
}).on('close', () => {
  const [N, M] = input[0].split(' ').map((i) => +i)
  const cards = input[1].split(' ').map((i) => +i)
  let result = 0
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const sum = cards[i] + cards[j] + cards[k]
        if (M - sum >= 0 && M - sum < M - result) result = sum
      }
    }
  }
  console.log(result)
  process.exit()
})
