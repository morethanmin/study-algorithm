const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
console.log(solution(+input.shift(), input.map(el => Number(el))))

//n개의 array에서 선택하는 최대값을 구한다.
function solution(n, array) {
  const memo = new Array(n).fill(0)

  //잔이 하나인경우 최대값
  memo[0] = array[0]
  //잔이 두개인 경우 최대값
  memo[1] = Math.max(
    array[0] + array[1],
    array[1]
  )
  //잔이 세개인 경우 최대값
  memo[2] = Math.max(
    memo[0] + array[2],
    array[1] + array[2],
    memo[1]
  )
  //잔이 n개인 경우 최대값
  for (let i = 3; i < n; i++) {
    memo[i] = Math.max(
      array[i] + array[i - 1] + memo[i - 3],
      array[i] + memo[i - 2],
    )
    memo[i] = Math.max(
      memo[i - 1],
      memo[i],
    )
  }
  return memo[n - 1]
}