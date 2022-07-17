const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => +el)
const [A, B] = input
const answer = A + B
console.log(answer)