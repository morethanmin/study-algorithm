const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []

//N*N 크기의 판에 N개의 퀸을 놓는 경우의 수를 구하는 함수
const solution = (N) => {
  // 실제 해당 경우의 수를 저장하는 변수
  let count = 0

  //n의 크기의 보드판을 만든다.
  //board의 index에는 보드판의 y값, index의 value 퀸이 놓이는 위치. 즉, x값이다. 편의를 위해 1부터 시작하도록 설정해두었다.
  const board = new Array(N + 1).fill(0).map((el) => 0)

  //해당 열이 유망한지 판단하는 함수.
  const isPromising = (y) => {
    for (let x = 1; x < y; x++) {
      if (
        // 일직선상에 위치해있는 경우
        board[x] === board[y] ||
        //대각선에 위치해있는 경우
        Math.abs(board[y] - board[x]) === y - x
      ) {
        return false
      }
    }
    return true
  }

  const queen = (y) => {
    //유망한지 확인
    if (isPromising(y)) {
      //마지막 y값 까지 온 경우 count를 더해준다.
      if (y === N) {
        console.log(board);
        count++

        //마지막 y값이 아닌 경우에는 다음 y값에 대해서 확인해야한다.
      } else {
        
        //해당 y열 다음 열에 대해서 x값을 순차적으로 넣어주고 해당 값이 유망한지 확인한다.
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

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  const N = +inputs[0]
  console.log(solution(N));
  process.exit()
})