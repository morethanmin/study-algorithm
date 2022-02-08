const fs = require('fs');

const readFileSyncAddress = '/dev/stdin';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

input = input.map(row => row.split(' ').map(i => Number(i)));

// 문제 풀이
function solution(input) {

  const zero = getBlankArr();
  const n = zero.length;
  let answer = [];

  function isPossible(x, y, value) {
    // 가로 줄 확인
    for (let i = 0; i < input.length; i++) {
      if (input[x][i] === value) return false;
    }

    // 세로 줄 확인
    for (let i = 0; i < input.length; i++) {
      if (input[i][y] === value) return false;
    }

    // 3 X 3 확인
    let threeX = Math.floor(x / 3) * 3;
    let threeY = Math.floor(y / 3) * 3;
    for (let i = threeX; i < threeX + 3; i++) {
      for (let j = threeY; j < threeY + 3; j++) {
        if (input[i][j] === value) return false;
      }
    }

    return true;
  }

  function getBlankArr() {
    const zeros = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[0].length; j++) {
        if (input[i][j] === 0) zeros.push([i, j]);
      }
    }
    return zeros;
  }

  function sudoku(count) {
    // 찾아야 하는 수를 다 찾았으면 리턴
    if (count === n) {
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          answer.push(input[i][j]);
        }
        console.log(answer.join(' '));
        answer = [];
      }
      process.exit(0); // 스도쿠 하나 완성하면 프로세스 종료 
    }

    let zeroX = zero[count][0];
    let zeroY = zero[count][1];

    for (let i = 1; i <= input.length; i++) {
      if (isPossible(zeroX, zeroY, i)) {
        input[zeroX][zeroY] = i;
        sudoku(count + 1);
        input[zeroX][zeroY] = 0;
      }
    }
  }

  sudoku(0);

  return input;
}

// 제출
console.log(solution(input));