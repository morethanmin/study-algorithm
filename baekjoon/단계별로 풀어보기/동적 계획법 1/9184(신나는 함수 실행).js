const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const result = []

//메모이제이션 
let memo = new Array(20 + 1)
for (let i = 0; i < 21; ++i) {
  memo[i] = new Array(21);
  for (let j = 0; j < 21; ++j) {
    memo[i][j] = new Array(21).fill(0);
  }
}

input.forEach(element => {
  const [a, b, c] = element.split(' ').map((el)=>Number(el))
  if (a === -1 && b === -1 && c === -1) return
  result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`)
});
function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1
  }
  
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20)
  }

  //메모이제이션이 되어있는 경우 해당값 리턴
  if (memo[a][b][c] !== 0) {
    return memo[a][b][c];
  }

  if (a < b && b < c) {
    let m1 = memo[a][b][c - 1] = w(a, b, c - 1)
    let m2 = memo[a][b - 1][c - 1] = w(a, b - 1, c - 1)
    let m3 = memo[a][b - 1][c] = w(a, b - 1, c)

    return memo[a][b][c] = m1 + m2 - m3
  }
  let m1 = memo[a - 1][b][c] = w(a - 1, b, c)
  let m2 = memo[a - 1][b - 1][c] = w(a - 1, b - 1, c)
  let m3 = memo[a - 1][b][c - 1] = w(a - 1, b, c - 1)
  let m4 = memo[a - 1][b - 1][c - 1] = w(a - 1, b - 1, c - 1)

  return memo[a][b][c] = m1 + m2 + m3 - m4
}

console.log(result.join('\n'));