const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = +input.shift()

// N자리의 2진수를 만드는데, 해당 이진수는 00 또는 1이라는 타일만 사용할 수 있다. 이때의 가짓수를 리턴한다.
function solution(N) {
  const tile = new Array(N + 1)
  let count = 0

  //만약 0이 있는 경우 두번 반복되는지 확인한다.

  function isPromising(tile) {
    let zeroCnt = 0
    let isValid = true
    tile.forEach(el => {
      if (el === 0) {
        zeroCnt++
      }
      //중간에 1이 들어왔는데 0 개수가 홀수 인경우
      else if (zeroCnt % 2 === 1) {
        isValid = false
        return
      }
    })
    //마지막 0 개수가 홀수 인경우 
    if (zeroCnt % 2 === 1) isValid = false
    return isValid
  }
  function dfs(n) {
    if (N === n) {
      if (isPromising(tile.slice(1))) {
        count++
      }
      return
    } else {
      for (let i = 0; i <= 1; i++) {
        tile[n + 1] = i
        dfs(n + 1)
      }
    }
  }

  dfs(0)
  return count
}

console.log(solution(N) % 15746)