const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inputs = []


//모든 능력치의 합을 구하고 해당 합의 최대 최솟값을 구한다.
const solution = (s) => {
  console.log(s);
  const N = s.length
  // 길이가 n인 배열을 선언하고 앞과 뒤를 잘라 팀으로 본다.
  const teamArr = new Array(N + 1)
  const getValue = (n) => {
    if (n === N) {
      console.log(teamArr);
    } else {
      for (let i = 0; i < N; i++) {
        teamArr[n+1] = s[n][i]
        getValue(n+1)
      }
    }
  }

  getValue(0)
}

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  //참여하는 n명. 짝수만 들어감.
  const N = +inputs.shift()
  const S = inputs.map((row) => row.split(' ').map((el) => +el))
  console.log(solution(S));


  process.exit()
})