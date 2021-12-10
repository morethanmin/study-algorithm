const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
let counts = []
for (i = 0; i < alphabets.length; i++) {
  counts[i] = 0
}

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const word = input[0].toLowerCase()
  for (j = 0; j < word.length; j++) {
    for (i = 0; i < alphabets.length; i++) {
      if (word[j] === alphabets[i]) {
        counts[i]++
      }
    }
  }
  const max = Math.max.apply(null, counts)
  const result = counts.indexOf(max)
  const result2 = counts.indexOf(max, result + 1)
  if (result2 === -1) {
    console.log(alphabets[result].toUpperCase())
  } else {
    console.log('?')
  }
  process.exit()
})
