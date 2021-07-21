const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

const handleInput = (line) => {
  input.push(line)
}

const handleOutput = () => {
  const [N, M] = input[0].split(' ').map((k) => Number(k))
  //배열에 해당 크기만큼 저장
  //해당 크기의 배열에서 -8한 중첩 for문돌려서 각 case마다 개수 비교해서 최소값 구하면 된다.
  process.exit()
}

rl.on('line', handleInput).on('close', handleOutput)
