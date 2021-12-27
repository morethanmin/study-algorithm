const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = +input[0]
  const peoples = []
  for (let i = 1; i <= T; i++) {
    //x는 몸무게, y는 키
    peoples.push(input[i].split(' ').map((i) => +i))
  }
  result = Array(T).fill(1)
  for (i in peoples) {
    //i번 째 사람의 등수를 구한다.
    const [x, y] = peoples[i]
    for (j in peoples) {
      //자기자신과는 비교하지 않는다.
      if (i === j) continue
      const [p, q] = peoples[j]
      if (p > x && q > y) {
        result[i]++
      }
    }
  }
  console.log(result.join(' '))
  process.exit()
})
