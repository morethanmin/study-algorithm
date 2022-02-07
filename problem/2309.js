/**
 * 문제 : https://www.acmicpc.net/problem/2309
 */
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

function quickSort(array) {
  if (array.length < 2) {
    return array
  }
  const leftArr = []
  const rightArr = []
  const pivot = array[0]
  for (let i = 1; i < array.length; i++) {
    if (pivot > array[i]) leftArr.push(array[i])
    if (pivot < array[i]) rightArr.push(array[i])
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

function getCombinations(array, N) {
  const result = []
  const answer = []
  const selected = new Array(N).fill(false)

  function dfs(n, start) {
    if (n === N) {
      result.push([...answer])
    } else {
      for (let i = start; i < array.length; i++) {
        if (selected[i]) continue
        selected[i] = true
        answer.push(array[i])
        dfs(n + 1, i)
        answer.pop()
        selected[i] = false
      }
    }
  }
  dfs(0, 0)
  return result
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const heights = inputs.map((el) => +el)
  const sortedHeights = quickSort(heights)
  const heightCombinations = getCombinations(sortedHeights, 7)
  let resultIdx
  for (let i = 0; i < heightCombinations.length; i++) {
    const sum = heightCombinations[i].reduce((acc, cur) => (acc + cur), 0)
    if (sum === 100) {
      resultIdx = i
      break
    }
  }
  console.log(heightCombinations[resultIdx].join('\n'));
})