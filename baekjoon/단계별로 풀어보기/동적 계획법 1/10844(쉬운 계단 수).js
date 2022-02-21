const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const mod = BigInt(1000000000);

console.log(String(solution(+input.shift()) % mod))

function solution(N) {
  const memo = new Array(N + 1)
  for (let i = 0; i <= N; i++) {
    memo[i] = []
  }
  for (let i = 0; i < 10; i++) {
    if (i === 0)
      memo[1][0] = BigInt(0)
    else
      memo[1][i] = BigInt(1)
  }
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
      memo[i][j] = BigInt(0)
      if (j - 1 >= 0) memo[i][j] += memo[i - 1][j - 1]
      if (j + 1 <= 9) memo[i][j] += memo[i - 1][j + 1]
      memo[i][j] = BigInt(memo[i][j]) % mod
    }
  }
  console.log(memo);
  return memo[N].reduce((acc, cur) => acc + cur);

}