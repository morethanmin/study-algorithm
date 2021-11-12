const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  let result = 0
  for (alphabet of input[0]) {
    result += getTime(alphabet)
  }
  console.log(result)
  process.exit()
})

const getTime = (alphabet) => {
  switch (alphabet) {
    case 'A':
    case 'B':
    case 'C':
      return 3
    case 'D':
    case 'E':
    case 'F':
      return 4
    case 'G':
    case 'H':
    case 'I':
      return 5
    case 'J':
    case 'K':
    case 'L':
      return 6
    case 'M':
    case 'N':
    case 'O':
      return 7
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
      return 8
    case 'T':
    case 'U':
    case 'V':
      return 9
    case 'W':
    case 'X':
    case 'Y':
    case 'Z':
      return 10

    default:
      return 0
  }
}
