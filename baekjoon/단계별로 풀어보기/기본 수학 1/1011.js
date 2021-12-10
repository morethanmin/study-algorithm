const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

//팩토리얼 구하는 함수
const getSum = (n) => (n * (n + 1)) / 2

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = parseInt(input[0])
  for (let i = 1; i <= T; i++) {
    {
      //x 현재위치, y 이동거리
      const [x, y] = input[i].split(' ').map((k) => parseInt(k))
      // 이동해야 할 거리.
      let distance = y - x
      // 이동 할 수 있는 거리.
      let moveAmount = 0
      // 이동한 횟수.
      let count = 0

      while (distance !== 0) {
        if (getSum(moveAmount + 1) <= distance) {
          moveAmount = moveAmount + 1
          distance = distance - moveAmount
        } else if (getSum(moveAmount) <= distance) {
          moveAmount = moveAmount ? moveAmount : 1
          distance = distance - moveAmount
        } else if (getSum(moveAmount - 1) <= distance) {
          moveAmount = moveAmount - 1
          distance = distance - moveAmount
        }
        count++
      }
      console.log(count)
    }
  }
  process.exit()
})
