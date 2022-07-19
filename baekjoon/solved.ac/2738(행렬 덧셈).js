const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(row => row.split(' ').map(el => Number(el)))
const [N, M] = input.shift()
const A = input.slice(0, N)
const B = input.slice(N, N * 2)

for (let i = 0; i < N; i++) {
  const answer = []
  for (let j = 0; j < M; j++) {
    answer.push(A[i][j] + B[i][j])
  }
  console.log(answer.join(' '))
}
