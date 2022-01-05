const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const N = inputs.shift()
  const arrays = Array.from(new Set(inputs))
  const sortedArrays = arrays.sort((word, nextWord) => {

    if (word.length === nextWord.length) {

      return (word) > (nextWord) ? 1 : -1
    } else {
      return word.length - nextWord.length
    }
  })

  console.log(sortedArrays.join('\n'))
  process.exit()
})