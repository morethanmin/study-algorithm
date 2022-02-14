const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n').map((el) => +el)

const T = +input.shift()

const memo = new Array(T + 1).fill(0)
memo[1] = 1
memo[2] = 1
memo[3] = 1
memo[4] = 2
memo[5] = 2

function P(N) {
  if (N < 6) return memo[N]
  for (let i = 6; i <= N; i++) {
    memo[i] = memo[i - 5] + memo[i - 1]
  }
  return memo[N]
}

const result = input.map((N) => P(N)).join('\n')

console.log(result)