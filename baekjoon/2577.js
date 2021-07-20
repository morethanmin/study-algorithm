const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
const handleInput = (line) => {
  input.push(Number(line))
}

const handleOutput = () => {
  const [A, B, C] = input
  const numStr = (A * B * C).toString()
  let result = new Array(10).fill(0)
  for (let i = 0; i < numStr.length; i++) {
    result[Number(numStr[i])]++
  }
  for (i in result) {
    console.log(result[i])
  }
}

rl.on('line', handleInput).on('close', handleOutput)
