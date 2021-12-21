const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '0 0 0') break
    const triArr = input[i].split(' ').map((i) => +i)
    const maxVal = Math.max(...triArr)
    let nmgSquaredVal = 0
    for (let j = 0; j < triArr.length; j++) {
      if (triArr[j] === maxVal) continue
      nmgSquaredVal += triArr[j] * triArr[j]
    }
    if (nmgSquaredVal === maxVal * maxVal) console.log('right')
    else console.log('wrong')
  }

  process.exit()
})
