const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = Number(input.shift())
const scores = input.map(el => Number(el))
console.log(solution(scores, N))

function solution(scores, N) {
  const memo = new Array(N).fill(0)

  //첫째칸가는경우 최대값
  memo[0] = scores[0]
  //둘째칸가는경우 최대값, 한칸 or 두칸
  memo[1] = Math.max(scores[0] + scores[1], scores[1])
  //셋째칸가는경우 최대값, 한칸 두칸 or 두칸 한칸
  memo[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2])
  for (let i = 3; i < N; i++) {
    //i째칸가는경우 최대값, i칸 i-1칸 i-3최대값 or i칸 i-2최대값
    memo[i] = Math.max(scores[i] + scores[i - 1] + memo[i - 3], scores[i] + memo[i - 2])
  }
  return memo[N - 1]
}