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

/*

자르는 길이를 x, 부피를 y라고 하면

y = (a - 2x)² * x
   = 4x³ - 4ax² + a²x

y' = 12x² - 8ax + a² = (6x - a) (2x - a)

y' = 0 이 되는 극값은 x=a/2, a/6

그런데 a/2면은 y=0이니 성립될 수 없읍니다.
그러니까 x = a/6일 때 y가 최대
 
 */