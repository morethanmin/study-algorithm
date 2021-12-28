const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

/**
 * @param {*} num 원반의 수
 * @param {*} from 원반들이 위치한 곳의 번호
 * @param {*} to 원반들을 옮길 목적지 번호
 * @param {*} other 나머지 한 곳(목적지가 아닌) 곳 번호
 * @returns
 */

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  function hanoi(num, from, to, other) {
    // 모두 옮겼으면 종료
    if (num === 0) return

    // 가장 아래 원반을 제외한 원반들을 재귀적으로 목적지가 아닌 곳으로 옮김
    hanoi(num - 1, from, other, to)

    // 가장 아래 원반을 목적지로 옮김
    result += `${from} ${to}\n`
    count++

    // 목적지가 아닌 곳으로 옮겼던 원반들을 재귀적으로 목적지로 옮김
    hanoi(num - 1, other, to, from)
  }
  const N = +input[0]
  let count = 0
  let result = ''
  hanoi(N, 1, 3, 2)

  console.log(count)
  console.log(result)
  process.exit()
})
