const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

const getMultisetCombination = (arr, selectNumber) => {
  const results = []

  if (selectNumber === 1) return arr.map((el) => [el])
  arr.forEach((value, index, origin) => {
    const rest = origin.slice(index)
    const combinations = getMultisetCombination(rest, selectNumber - 1)
    const attached = combinations.map((el) => [value, ...el])
    results.push(...attached)
  })
  return results
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const [N, M] = inputs[0].split(' ').map((i) => +i)
  const array = [...Array(N + 1).keys()]
  array.shift()
  console.log(
    getMultisetCombination(array, M)
      .map((val) => val.join(' '))
      .join(`\n`)
  )
  process.exit()
})
