const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = Number(input.shift())
const scores = input.map(el => Number(el))
console.log(solution(scores, N))

function solution(scores, N) {
  const memo = new Array(N).fill(0)
  memo[0] = scores[0]
  //한칸씩가는 경우, 두칸가는 경우
  memo[1] = Math.max(scores[0] + scores[1], scores[1])
  //한칸 두칸인경우, 두칸 한칸인 경우
  memo[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2])
  for (let i = 3; i < N; i++) {
    memo[i] = Math.max(scores[i] + scores[i - 1] + memo[i - 3], scores[i] + memo[i - 2])
  }
  return memo[N - 1]
}