const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(' ').map(el => BigInt(el))
console.log(`${(input[0] / input[1])}\n${input[0] % input[1]}`)