// https://www.acmicpc.net/problem/11659
/*
[input]
5 3
5 4 3 2 1
1 3
2 4
5 5

[output]
12
9
1


[문제]
숫자 n개가 주어지고, m번의 구간합을 구해야 한다.
1 3 이렇게 주어지면 1번째부터 3번째까지 숫자들의 합을 출력해야 한다.
*/

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let inputs = []

rl.on('line', (line) => {
  inputs.push(line)
}).on('close', () => {
  // 퉤
  process.exit()
})
© 2022 GitHub, Inc.
