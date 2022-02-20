const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = +input.shift()
console.log(solution(N))

function solution(X) {
  const memo = new Array(X + 1)
  function dp(x) {
    if (x === 1) return 0

    const arr = new Array()
    if (x % 3 === 0) {
      if (memo[x / 3]) arr.push(memo[x / 3])
      else arr.push(memo[x / 3] = dp(x / 3) + 1)
    }
    if (x % 2 === 0) {
      if (memo[x / 2]) arr.push(memo[x / 2])
      else arr.push(memo[x / 2] = dp(x / 2) + 1)
    }
    if (memo[x - 1]) arr.push(memo[x - 1])
    else arr.push(memo[x - 1] = dp(x - 1) + 1)
    //2로 나누는 경우의 수와 3을 나누는 경우의 수 중에서 최솟값을 가져온다
    return Math.min(...arr)
  }
  return dp(X)
}

