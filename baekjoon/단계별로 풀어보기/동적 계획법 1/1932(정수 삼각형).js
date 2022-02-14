const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const triangle = input.map((row) => row.split(' ').map((el) => +el))
console.log(triangle);

function solution(N, arr) {
  const memo = [...new Array(N)].map((el, idx) => new Array(idx+1).fill(0))
  memo[0][0] = arr[0][0]
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i.length; j++) {
      memo[i][j] = Math.max(arr[i + 1][j], arr[i + 1][j + 1]) + memo[i][j]
    }
  }
  return memo
}

console.log(solution(n, triangle));

//둘중 하나 중에서 최대 값을 가져온다.