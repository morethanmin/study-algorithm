const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = input.shift()
const scores = input.map(el => Number(el))
console.log(solution(scores, N))

function solution(scores, N) {
  for (let i = 0; i < scores.length; i++) {
    //세칸 이동가능한 경우
    if (scores[i + 3]) {
      i = i + 3
      //두계단 이동후 한칸이동하는 경우 한계단 이동우 두칸이동하는 경우 중 큰 값을 선택한다.
      scores[i] = Math.max(scores[i - 2] + scores[i - 3], scores[i - 1] + scores[i - 3]) + scores[i]
    } 
    //두칸 또는 한칸만 이동가능한 경우에는 무조건 한칸 이동
    else {
      scores[i] = scores[i - 1] + scores[i]
    }
  }
  return scores[N - 1]
}