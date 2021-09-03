const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString()

switch (Math.floor(Number(input) / 10)) {
  case 9:
  case 10:
    console.log('A')
    return
  case 8:
    console.log('B')
    return
  case 7:
    console.log('C')
    return
  case 6:
    console.log('D')
    return

  default:
    console.log('F')
    return
}
