const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  outpu: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [M, N] = input[0].split(' ').map((i) => {
    let num = parseInt(i)
    num = num === 1 ? 2 : num
    return num
  })
  let result = ''
  for (let i = M; i <= N; i++) {
    let isSosu = true
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isSosu = false
        break
      }
    }
    if (isSosu) {
      result += `${i}\n`
    }
  }
  console.log(result)
  process.exit()
})
