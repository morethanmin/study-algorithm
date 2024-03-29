/**
 * 문영채 매니저님 : 
 * n칸의 계단이 있다. 1칸 올라갈 수도 있고, 
 * 2칸 올라갈 수도 있는데 n칸 계단을 다 올라가는 가짓수를 구해라.
 * 
 * 유형 : 동적 계획법
 *  */



const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

const getAnswer = (n) => {
  if (n === 0 ||n === 1) return 1
  return getAnswer(n-1) + getAnswer(n-2)
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const N = +inputs[0]
  console.log(getAnswer(N));
  process.exit()
})