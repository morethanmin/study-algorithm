const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

//순열은 반대로 조합과는 관계없이 지정된 개수만큼 순서에 맞게 배열하는 것이다.
const getPermutations = (arr, selectNumber) => {
  const results = []

  // n개 중에서 1개 선택하는 경우(nP1), 모든 배열의 원소를 return 한다.
  if (selectNumber === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    // 해당하는 fixed(value)만 제외한 값을 구한다.
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
    // 나머지 값들에 대한 순열을 구한다.
    const permutations = getPermutations(rest, selectNumber - 1)
    // 돌아온 결과값에 붙이기
    const attached = permutations.map((el) => [fixed, ...el])
    // 결과값을 spread syntax로 모두 push 한다.
    results.push(...attached)
  })
  return results
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
  //console.log(array);
  //console.log(getPermutations(array, M));
  console.log(
    getPermutations(array, M)
      .map((val) => val.join(' '))
      .join(`\n`)
  )
  process.exit()
})
