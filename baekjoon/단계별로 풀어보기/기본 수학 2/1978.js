const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const N = parseInt(input[0])
  const nums = input[1].split(' ').map((i) => parseInt(i))
  let count = 0
  for (i = 0; i < nums.length; i++) {
    let isSosu = true
    if (nums[i] === 1) continue
    for (j = 2; j <= Math.ceil(nums[i] / 2); j++) {
      if (nums[i] % j === 0) {
        isSosu = false
        break
      }
    }
    if (isSosu) {
      count++
    }
  }
  console.log(count)
  process.exit()
})
