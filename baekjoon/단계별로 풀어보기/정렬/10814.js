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
  const sortedInputs = inputs.sort((a, b) => {
    const [aAge, aName] = a.split(' ')
    const [bAge, bName] = b.split(' ')
    if (+aAge === +bAge) {
      return aName > bName ? 1 : 0
    } else {
      return +aAge - +bAge
    }
  })
  console.log(sortedInputs.join('\n'));


  process.exit()
})