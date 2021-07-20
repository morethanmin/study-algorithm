const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = input[0]
  const arr = input[1].split(' ').map((x) => Number(x))
  let min = 1000000
  let max = -1000000
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  console.log(`${min} ${max}`)
}

rl.on('line', handleInput).on('close', handleOutput)
