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
  const getNumber = ([x, y]) => {
    //가로줄, 세로줄에 빈칸이 2개 이상인 경우, &&
    //사각형 안에 빈칸이 2개 이상인 경우
    return false
    //그렇지 않은 경우
    return true
  }

  const sudoku = (idx) => {
    const loc = blankArr[idx]

    //해당 값이 유망한 경우, 해당 값을 구해 board에 넣어주고, blank에서 제외한다. 다음 값을 호출한다.
    const resNum = getNumber(loc)
    if (resNum) {
      board[y][x] = resNum
      //구한 값은 blank에서 제외한다
      blankArr.splice(idx, 1);
    }
    //해당 값이 유망하지 않은 경우, 다음 값을 호출한다.
    if (blankArr.length) {
      //다음같이 length를 넘어서지 않고 순회하도록 처리해준다.
      if (blankArr.length - 1 === idx)
        soduku(0)
      else
        soduku(idx + 1)
    } else {
      return
    }
  }
  //값을 구해야하는 곳의 좌표를 모아두는 배열이다. 찾은 좌표는 없애줄 수 있도록 let으로 선언해두었다.
  let blankArr = findBlank()
  sudoku(0)
  console.log(blank);
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