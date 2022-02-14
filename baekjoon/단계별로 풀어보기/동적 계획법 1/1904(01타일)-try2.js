const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = +input.shift()

const memo = new Array(N).fill(0)

memo[1] = 1
memo[2] = 2
memo[3] = 3

for (let i = 4; i <= N; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746
}

console.log(memo[N])