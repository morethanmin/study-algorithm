const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const n = +input.shift()
const triangle = input.map((row) => row.split(' ').map((el) => +el))

function solution(N, arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.max((arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0), (arr[i - 1][j] ? arr[i - 1][j] : 0)) + arr[i][j]
    }
  }
  return Math.max(...arr[N - 1])
}

console.log(solution(n, triangle));