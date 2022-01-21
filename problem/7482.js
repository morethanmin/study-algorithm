// ㄹㅇ 진짜 찐 수학문제
// 저는 코드 딱 2줄로 풀었습니다 (파이썬)
// fighting
// https://www.acmicpc.net/problem/7482

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const n = inputs.shift()
  const aArr = inputs.map((el)=>+el)
  aArr.forEach((a)=>{
    console.log((a/6).toFixed(10));
  })
  // (a-2b)^2 * b 

  process.exit()
})
