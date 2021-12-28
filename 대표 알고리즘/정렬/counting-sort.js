const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = +input[0]
  input.shift()
  const array = input.map((i) => +i)
  let maxVal = 0
  //최대값구하기
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxVal) maxVal = array[i]
  }

  const countArray = Array(maxVal).fill(0)
  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - 1]++
  }

  let result = []
  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      result.push(i + 1)
    }
  }
  console.log(result.join('\n'))

  process.exit()
})
