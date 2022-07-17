const nQueen = (N) => {
  const board = new Array(N + 1).fill(0)
  let count = 0

  function isPromising(n) {
    for (let i = 1; i < n; i++) {
      if (
        // 일직선상인경우
        board[i] === board[n] ||
        // 대각선상인경우        
        Math.abs(board[i] - board[n]) === Math.abs(n - i)
      )
        return false
    }
    return true
  }

  function dfs(n) {
    if (isPromising(n)) {
      if (N === n) {
        count = count + 1
        return
      } else {
        for (let i = 1; i <= N; i++) {
          board[n + 1] = i
          dfs(n + 1)
        }
      }
    }
  }
  dfs(0)

  return count
}
console.log('nQueen(8)');
console.log(nQueen(8));