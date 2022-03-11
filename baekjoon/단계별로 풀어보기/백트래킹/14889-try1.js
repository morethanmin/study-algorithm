const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

const solution = (s) => {
  const N = s.length
  let teamArr = []
  let resultArr = []

  const isPromising = (n) => {

    if (n === 0) return true

    const [y, x] = teamArr[n - 1]
    const value = s[y][x]

    if (value === 0) return false

    let visited = false
    teamArr.forEach((val, idx) => {
      const [prevY, prevX] = val
      if (idx === n - 1) return
      if (prevY === y && prevX === x)
        visited = true
    })
    return !visited
  }
  const getValue = (n) => {
    if (isPromising(n)) {
      if (n === N) {

        const team1 = teamArr.slice(0, N / 2).reduce((acc, cur) => {
          const [curY, curX] = cur
          return acc + s[curY][curX]
        }, 0)

        const team2 = teamArr.slice(N / 2).reduce((acc, cur) => {
          const [curY, curX] = cur
          return acc + s[curY][curX]
        }, 0)
        resultArr.push(Math.abs(team1 - team2))
      } else {
        for (let y = 0; y < N; y++) {
          for (let x = 0; x < N; x++) {
            teamArr.push([y, x])
            getValue(n + 1)
            teamArr.pop()
          }
        }
      }
    }
  }

  getValue(0)

  console.log(resultArr);
  return Math.min(...resultArr)
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  //참여하는 n명. 짝수만 들어감.
  const N = +inputs.shift()
  const S = inputs.map((row) => row.split(' ').map((el) => +el))
  console.log(solution(S));
  process.exit()
})