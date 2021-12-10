const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [A, B] = input[0].split(' ').map((i) => Array.from(i).reverse())
  let result = []
  let nng = 0
  const range = A.length > B.length ? A.length : B.length
  for (let i = 0; i < range; i++) {
    const a = parseInt(A[i]) ? parseInt(A[i]) : 0
    const b = parseInt(B[i]) ? parseInt(B[i]) : 0
    const sum = a + b + nng
    const nmg = sum % 10
    nng = Math.floor(sum / 10)
    result.push(nmg)
  }
  if (nng) result.push(nng)
  console.log(result.reverse().join(''))

  process.exit()
})
