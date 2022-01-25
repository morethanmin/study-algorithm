/**
 * my ps play ground
 */

// n queen n * n 체스판에서 n개의 퀸을 놓을 수 있는 경우의 수를 구해보자.

const nQueenSolution = (N) => {
  let count = 0
  const board = new Array(N + 1).fill(0)

  const isPromising = (y) => {
    for (let i = 1; i < y; i++) {
      if (
        board[i] === board[y] ||
        Math.abs(board[y] - board[i]) === y - i
      ) {
        return false
      }
    }
    return true
  }

  const nQueen = (y) => {
    if (isPromising(y)) {
      if (y === N) {
        count++
      }
      else {
        for (let x = 1; x <= N; x++) {
          board[y + 1] = x
          nQueen(y + 1)
        }
      }
    }
  }
  nQueen(0)
  return count
}
console.log('nQueen(8)');
console.log(nQueenSolution(8));