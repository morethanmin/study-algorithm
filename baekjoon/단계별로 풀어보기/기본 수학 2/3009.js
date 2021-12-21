const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  const [x1, y1] = input[0].split(' ').map((i) => +i)
  const [x2, y2] = input[1].split(' ').map((i) => +i)
  const [x3, y3] = input[2].split(' ').map((i) => +i)
  let x4, y4

  //세로선
  let colLine = []
  if (x1 === x2) {
    colLine.push([x1, y1])
    colLine.push([x2, y2])
  } else if (x1 === x3) {
    colLine.push([x1, y1])
    colLine.push([x3, y3])
  } else {
    colLine.push([x2, y2])
    colLine.push([x3, y3])
  }

  //가로선
  let rowLine = []
  if (y1 === y2) {
    rowLine.push([x1, y1])
    rowLine.push([x2, y2])
  } else if (y1 === y3) {
    rowLine.push([x1, y1])
    rowLine.push([x3, y3])
  } else {
    rowLine.push([x2, y2])
    rowLine.push([x3, y3])
  }

  //세로선과 가로선중 같은 값이 아닌 값을 구한다.
  //colLine1 = rowLine=1, colLine1 = rowLine=2, colLine2 = rowLine=1, colLine2 = rowLine=2
  if (colLine[0][0] === rowLine[0][0] && colLine[0][1] === rowLine[0][1]) {
    console.log(`${rowLine[1][0]} ${colLine[1][1]}`)
  }
  if (colLine[0][0] === rowLine[1][0] && colLine[0][1] === rowLine[1][1]) {
    console.log(`${rowLine[0][0]} ${colLine[1][1]}`)
  }
  if (colLine[1][0] === rowLine[0][0] && colLine[1][1] === rowLine[0][1]) {
    console.log(`${rowLine[1][0]} ${colLine[0][1]}`)
  }
  if (colLine[1][0] === rowLine[1][0] && colLine[1][1] === rowLine[1][1]) {
    console.log(`${rowLine[0][0]} ${colLine[0][1]}`)
  }

  // console.log(colLine, rowLine)

  process.exit()
})
