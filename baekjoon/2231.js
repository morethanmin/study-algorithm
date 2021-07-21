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
  let gen = 0
  for (let i = 1; i < N; i++) {
    let sum = 0
    let iString = i.toString()
    for (let j = 0; j < iString.length; j++) {
      sum += Number(iString[j])
    }
    sum += i
    if (sum === Number(N)) {
      gen = i
      break
    }
  }
  console.log(gen)
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
