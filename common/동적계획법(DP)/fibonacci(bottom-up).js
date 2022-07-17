const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

// 피보나치는 첫째 및 둘째항은 1이고 그 뒤의 모든항은 바로앞 두항의 합인 수열을 의미한다.
// 아래와 같이 재귀를 이용해서 쉽계구할 수 있지만 공간 복잡도가 증가함에 따라 동적계획법을 통해 구현해 볼 수 있다.
const getFibonachiUsingRecursion = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return getPbonachi(n - 1) + getPbonachi(n - 2)
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  // DP방식으로 n번째의 피보나치 값을 가져오는 함수. bottom-up
  const getFibonacci = (n) => {
    let arr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567; // 나누는 위치 주의
    }
    return arr[n]
  }
  const N = +inputs.shift()
  console.log(getFibonacci(N))
  process.exit()
})
