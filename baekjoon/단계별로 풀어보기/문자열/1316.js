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
  let count = 0
  for (let i = 1; i <= N; i++) {
    const word = input[i]
    const wordSet = new Set()
    let isGroupWord = true
    for (j = 0; j < word.length; j++) {
      if (
        j !== 0 &&
        word[j - 1] !== word[j] &&
        Array.from(wordSet).includes(word[j])
      ) {
        isGroupWord = false
      } else {
        wordSet.add(word[j])
      }
    }
    if (isGroupWord) count++
  }
  console.log(count)
  process.exit()
})
