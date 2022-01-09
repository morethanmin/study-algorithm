const fs = require('fs')

const inputData = fs.readFileSync('/dev/stdin').toString().split('\n')
const T = inputData[0]
const input = inputData[1].split(' ')
console.log(T, input)
