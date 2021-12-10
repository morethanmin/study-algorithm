const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const rect = (n) => {
  if (n === 3)
    return `***
* *
***`
  const o = rect(Math.sqrt(n))
  return `${o}${o}${o}
${o} ${o}
${o}${o}${o}`
}

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const N = Number(input[0])
  console.log(rect(N))
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
