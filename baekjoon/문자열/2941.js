const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const sentence = input[0]
  let count = 0
  for (let j = 0; j < sentence.length; j++) {
    let find = false
    if (j - 1 !== sentence.length)
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i].length === 3) {
          if (
            `${sentence[j]}${sentence[j + 1]}${sentence[j + 2]}` === alphabet[i]
          ) {
            find = true
            count++
            j = j + 2
            break
          }
        } else {
          if (`${sentence[j]}${sentence[j + 1]}` === alphabet[i]) {
            find = true
            count++
            j++
            break
          }
        }
      }
    if (find === false) {
      count++
    }
  }
  console.log(count)
  process.exit()
})
