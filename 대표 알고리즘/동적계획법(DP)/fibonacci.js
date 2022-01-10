const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

//아래와 같이 재귀를 이용해서 쉽계구할 수 있지만 공간 복잡도가 증가함에 따라 동적계획법을 통해 구현해 볼 수 있다.
const getFibonachiUsingRecursion = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  return getPbonachi(n - 1) + getPbonachi(n - 2)
}

//피보나치는 첫째 및 둘째항은 1이고 그 뒤의 모든항은 바로앞 두항의 합인 수열을 의미한다.
const getFibonacciUsingDP = (n) => {
  if (n <= 1) return n

}


rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  //N개중에서 M개로 조합을 구한다. nPr

  //N과 M을 가져온다.
  const [N, M] = inputs[0].split(' ').map((i) => +i)

  //N에 해당하는 길이의 정수배열을 만들어준다.
  const array = [...Array(N + 1).keys()]
  //index값이 순차적으로 들어가 있으므로, 0은 빼준다.
  array.shift()
  console.log(getPermutations(array, M));
  // console.log(
  //   getPermutations(array, M)
  //     .map((val) => val.join(' '))
  //     .join(`\n`)
  // )
  process.exit()
})
