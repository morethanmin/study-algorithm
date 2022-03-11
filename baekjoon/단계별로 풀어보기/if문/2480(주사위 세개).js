const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')[0].split(' ').map(el => Number(el))
const inputSet = new Set(input)

if (inputSet.size === 1) {
  let target = input[0]
  console.log(10000 + target * 1000);
}
else if (inputSet.size === 2) {
  let target = 0
  if (input[0] === input[1]) target = input[0]
  if (input[0] === input[2]) target = input[0]
  if (input[1] === input[2]) target = input[1]
  console.log(1000 + target * 100);
}
else if (inputSet.size === 3) {
  let target = Math.max(...input)
  console.log(target * 100);
}