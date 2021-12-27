const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  input.shift()
  const array = input.map((i) => +i)
  for (let i = 0; i < array.length; i++) {
    let minIdx = i
    for (let j = i; j < array.length; j++) {
      if (array[minIdx] > array[j]) {
        minIdx = j
      }
    }
    console.log(array[minIdx])
    if (minIdx !== i) {
      const temp = array[minIdx]
      array[minIdx] = array[i]
      array[i] = temp
    }
  }

  process.exit()
})
