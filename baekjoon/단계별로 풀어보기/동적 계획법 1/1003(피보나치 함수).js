const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const T = input.shift()


function solution(n) {
  const memo = Array.from(Array(n + 1), () => new Array(2).fill(0))
  function fibonacci(n) {
    if (n === 0) {
      memo[0] = [1, 0]
      return memo[0]
    }
    if (n === 1) {
      memo[1] = [0, 1]
      return memo[1]
    }
    if (n === 2) {
      memo[2] = [1, 1]
      return memo[2]
    }
    // 메모이제이션이 되어 있으면 바로 리턴
    if (memo[n][0] !== 0 && memo[n][1] !== 0) {
      return memo[n]
    }
    let num1 = fibonacci(n - 1)
    let num2 = fibonacci(n - 2)

    return memo[n] = [num1[0] + num2[0], num1[1] + num2[1]]
  }

  fibonacci(n)

  return `${memo[n][0]} ${memo[n][1]}`
}

const result = input.map((el) => solution(+el))
console.log(result.join('\n'))