const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString()
const inputNum = Number(input)
if ((inputNum % 4 === 0 && inputNum % 100 !== 0) || inputNum % 400 === 0) {
  console.log(1)
} else {
  console.log(0)
}
