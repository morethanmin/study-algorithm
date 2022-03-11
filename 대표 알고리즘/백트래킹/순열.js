const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

const getPermutations = (arr, N) => {
  const result = []
  const answer = []
  let visited = new Array(arr.length).fill(false)

  function dfs(n) {
    if (n === N) {
      result.push([...answer])
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (visited[i] === true) continue;
        visited[i] = true
        answer.push(arr[i])
        dfs(n + 1)
        answer.pop()
        visited[i] = false
      }
    }
  }
  dfs(0)
  return result
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  //N과 M을 가져온다.
  const [N, M] = inputs[0].split(' ').map((i) => +i)

  //N에 해당하는 길이의 정수배열을 만들어준다.
  const array = [...Array(N + 1).keys()]
  //index값이 순차적으로 들어가 있으므로, 0은 빼준다.
  array.shift()

  console.log(
    getPermutations(array, M)
      .map((val) => val.join(' '))
      .join(`\n`)
  )
  process.exit()
})
