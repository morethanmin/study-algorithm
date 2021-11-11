const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [A, B] = input[0].split(' ')
  let reversedA = [],
    reversedB = []
  for (let i = A.length - 1; i >= 0; i--) {
    reversedA.push(A[i])
  }
  for (let i = B.length - 1; i >= 0; i--) {
    reversedB.push(B[i])
  }
  const parsedA = parseInt(reversedA.join(''))
  const parsedB = parseInt(reversedB.join(''))
  console.log(parsedA > parsedB ? parsedA : parsedB)
  process.exit()
})
