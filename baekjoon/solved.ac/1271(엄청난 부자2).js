const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ').map(el => Number(el))
console.log(`${Math.floor(input[0] / input[1])}\n${input[0] % input[1]}`)