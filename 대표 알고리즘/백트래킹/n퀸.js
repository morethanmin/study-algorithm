/** 
 * 백트래킹은 이름 그대로 모든 경우의 수를 확인해보며 유망하지 않은 경우에는 되돌아가 다음 경우의수를 확인하는 알고리즘이다.
 */

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
console.log(`-----nQueen(8)-----`)
console.log(nQueen(8))