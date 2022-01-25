const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

//조합은 순서와 상관없이 말그대로 값이 들어있는 조합을 구하는 것임.
const getCombinations = (arr, selectNumber) => {
  const results = []

  // n개 중에서 1개 선택하는 경우(nC1), 모든 배열의 원소를 return 한다.
  if (selectNumber === 1) return arr.map((el) => [el])
  arr.forEach((fixed, index, origin) => {
    // 해당하는 fixed(value)를 제외한 나머지 뒤의 값을 구한다.
    const rest = origin.slice(index + 1)
    // 나머지 값들에 대한 조합을 구한다.
    const combinations = getCombinations(rest, selectNumber - 1)
    // 돌아온 조합에 붙이기
    const attached = combinations.map((el) => [fixed, ...el])
    // 결과값을 spread syntax로 모두 push 한다.
    results.push(...attached)
  })
  return results
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  //N개중에서 M개로 조합을 구한다. nCm

  //N과 M을 가져온다.
  const [N, M] = inputs[0].split(' ').map((i) => +i)

  //N에 해당하는 길이의 정수배열을 만들어준다.
  const array = [...Array(N + 1).keys()]
  //index값이 순차적으로 들어가 있으므로, 0은 빼준다.
  array.shift()

  console.log(
    getCombinations(array, M)
      .map((val) => val.join(' '))
      .join(`\n`)
  )
  process.exit()
})
