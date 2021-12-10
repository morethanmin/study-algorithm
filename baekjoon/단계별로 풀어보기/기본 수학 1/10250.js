const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const T = parseInt(input[0])
  for (let i = 1; i <= T; i++) {
    const [H, W, N] = input[i].split(' ').map((k) => parseInt(k))

    //방 배정이 맨 윗층인경우
    let X, Y
    if (N % H === 0) {
      X = N / H
      Y = H
      //맨 윗층이 아닌 경우
    } else {
      X = Math.floor(N / H) + 1
      Y = N - H * Math.floor(N / H)
    }

    X = X < 10 ? `0${X}` : X
    console.log(`${Y}${X}`)
  }

  process.exit()
})
