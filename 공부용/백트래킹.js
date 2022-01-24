/** 
 * 백트래킹은 모든 경우의 수를 확인해보는 알고리즘이다.
 * 
 * 경우의 수를 확인해보는 방식은 다양한데, 
 * 무식하게 전부 다 확인하는 브루트포스,
 * 순서와 상관없이 경우의 수를 확인하는 조합,
 * 순서를 고려하여 경우의 수를 확인하는 순열 등이 있다.
 */

const getCombinations = (arr, selectNumber) => {
  const result = []
  if (selectNumber === 1) return arr.map((el) => [el])
  arr.forEach((fixed, idx, origin) => {
    const restArr = origin.slice(idx + 1)
    const combinations = getCombinations(restArr, selectNumber - 1)
    const attached = combinations.map((el) => [fixed, ...el])
    result.push(...attached)
  });
  return result
}

const getPermutations = (arr, selectNumber) => {
  const result = []
  if (selectNumber === 1) return arr.map((el) => [el])
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)]
    const permutations = getPermutations(rest, selectNumber - 1)
    const attached = permutations.map((el) => [fixed, ...el])
    result.push(...attached)
  })
  return result
}

//N*N 크기의 판에 N개의 퀸을 놓는 경우의 수를 구한다.
const nQueen = (N) => {
  let count = 0
  const board = new Array(N + 1).fill(0)

  //해당 열이 유망한지 확인 
  const isPromising = (y) => {
    for (let i = 1; i < y; i++) {
      if (
        //이전에 열에서 특정 x값이 현재 y열의 x값과 같은 경우는 일직선상에 위치해있는 경우
        board[i] === board[y] ||
        //대각선상에 위치해있는 경우
        Math.abs(board[y] - board[i]) === y - i) {
        return false
      }
    }
    return true
  }

  const queen = (y) => {
    //유망한지 확인
    if (isPromising(y)) {
      if (y === N) {
        count++
      } else {
        for (let x = 1; x <= N; x++) {
          board[y + 1] = x
          queen(y + 1)
        }
      }
    }
  }

  queen(0)
  return count
}

console.log(`-----getCombinations(4,3)-----`)
console.log(getCombinations([1, 2, 3, 4], 3))
console.log(`-----getPermutations(4,3)-----`)
console.log(getPermutations([1, 2, 3, 4], 3))
console.log(`-----nQueen(8)-----`)
console.log(nQueen(8))