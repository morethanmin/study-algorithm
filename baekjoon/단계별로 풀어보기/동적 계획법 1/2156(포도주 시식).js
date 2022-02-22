const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
console.log(solution(+input.shift(), input.map(el => Number(el))))

function solution(n, array) {
  return array
}