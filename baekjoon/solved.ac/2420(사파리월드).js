const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e => Number(e))
//const input = [-2, 5]
const [A, B] = input
const answer = Math.abs(A - B)
console.log(answer)