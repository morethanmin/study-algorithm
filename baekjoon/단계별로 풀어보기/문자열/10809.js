const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const S = input[0]
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
  let result = ''
  for (i = 0; i < alphabets.length; i++) {
    const alphabet = alphabets[i]
    let location = null
    for (j = 0; j < S.length; j++) {
      if (alphabet === S[j]) {
        location = j
        break
      }
    }
    if (location === null) {
      result += `-1 `
    } else {
      result += `${location} `
    }
  }
  console.log(result)
  process.exit()
})
