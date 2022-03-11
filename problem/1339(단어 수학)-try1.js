const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const N = input.shift()

function solution(words) {
  const getPermutations = (arr) => {
    const result = []
    const answer = []
    let visited = new Array(arr.length).fill(false)

    function dfs(n) {
      if (n === arr.length) {
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

  const alphabetSet = new Set()
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      alphabetSet.add(words[i][j])
    }
  }
  const scorePermutaions = getPermutations([...new Array(alphabetSet.size).keys()].map(key => 10 - key))

  console.log(alphabetSet);
  console.log(scorePermutaions);
  for (let i = 0; i < scorePermutaions.length; i++) {
    const alphabetScore = new Object()
    const alphabetSetArr = Array.from(alphabetSet)
    for (let j = 0; j < scorePermutaions[i].length; j++) {
      alphabetScore[alphabetSetArr[j]] = scorePermutaions[i][j]
    }
    console.log(alphabetScore);
  }
  //완전 잘못 품
}

console.log(solution(input))