const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const inputs = []

const solution = (board) => {
  //실제 존재하는 빈칸을 모두 찾아낸다.
  const findBlank = () => {
    const result = []
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board.length; x++) {
        if (board[y][x] === 0) {
          result.push([x, y])
        }
      }
    }
    return result
  }

  // 유망한 경우 정답도 알려준다. 유망하지 않은 경우 -1을 리턴한다.
  const getNumber = (idx) => {
    console.log("유망한지 확인. 현재 blankArr 는");
    console.log(blankArr);
    console.log("idx");
    console.log(idx);
    //변수를 선언한다.
    const [X, Y] = blankArr[idx]
    //가로줄에 빈칸이 2개 이상인 경우
    let hasRow = false
    //세로줄에 빈칸이 2개 이상인 경우
    let hasCol = false
    //사각형 안에 빈칸이 2개 이상인 경우
    let hasRect = false
    let result = -1

    //유망한지 확인한다.
    for (let i = 0; i < blankArr.length; i++) {
      if (i === idx) continue
      const [x, y] = blankArr[i]
      //가로줄 빈칸이 존재하는지 확인
      //y값이 같은지 확인
      if (Y === y) {
        hasRow = true
      }
      //세로줄 빈칸이 존재하는지 확인
      //x값이 같은지 확인
      else if (X === x) {
        hasCol = true
      }
      //사각형 안에 있는지 확인 
      else if (Math.floor(X / 3) === Math.floor(x / 3) && Math.floor(Y / 3) === Math.floor(y / 3)) {
        hasRect = true
      }
    }

    //유망한 경우 결과값을 출력한다.
    //가로줄로 풀수 있는 경우
    if (!hasRow) {
      let sum = 0
      for (let i = 1; i <= 9; i++) {
        sum = sum + board[Y][i - 1]
      }
      result = 45 - sum
    }
    //세로줄로 풀수 있는 경우
    else if (!hasCol) {
      let sum = 0
      for (let i = 1; i <= 9; i++) {
        sum = sum + board[i - 1][X]
      }
      result = 45 - sum
    }
    //사각형으로 풀 수 있는 경우
    else if (!hasRect) {
      let sum = 0
      for (let x = Math.floor(X / 3) * 3; x < Math.floor(X / 3) * 3 + 3; x++) {
        for (let y = Math.floor(Y / 3) * 3; y < Math.floor(Y / 3) * 3 + 3; y++) {
          sum = sum + board[y][x]
        }
      }
      result = 45 - sum
    }
    return result
  }

  const sudoku = (idx) => {
    //해당 값이 유망한 경우, 해당 값을 구해 board에 넣어주고, blank에서 제외한다. 다음 값을 호출한다.
    const resNum = getNumber(idx)
    if (resNum > 0) {
      const [x, y] = blankArr[idx]
      board[y][x] = resNum
      //구한 값은 blank에서 제외한다
      blankArr.splice(idx, 1);
    }
    //해당 값이 유망하지 않은 경우, 다음 값을 호출한다.
    if (blankArr.length) {
      //다음값이 배열 index를 넘어설 경우, 0부터 순차적으로 처리한다.
      if (blankArr.length - 1 < idx + 1)
        sudoku(0)
      else
        sudoku(idx + 1)
    } else {
      return
    }
  }
  //값을 구해야하는 곳의 좌표를 모아 둔 배열이다. 찾은 좌표는 없애줄 수 있도록 let으로 선언해두었다.
  let blankArr = findBlank()
  sudoku(0)
  console.log(blankArr);
}

//0으로 채워져있는 빈칸을 채우면 된다. 해당 값을 지금 당장 처리할 수 있는지 없는지를 확인한다.
//예를들어 빈칸이 여러가지여서 확인이 불가능한 경우에는 다른 걸 먼저 확인해야한다.
rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  let board = inputs.map((row) => row.split(' ').map((el) => +el))
  //console.log(board);
  solution(board)
  console.log(board.map((row) => row.join(' ')).join('\n'));
})

//우선 유망한지 확인하는 로직에서 셋다 확인을 해야하는데 그렇게 확인하지 않았다.
//그리고 값을 구하는 과정을 유망한지 확인하는 곳에 넣어두었는데, 이러한 형태가 아니라
//백트래킹적인 사고로 푸는 것이 중요할것 같다.