const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

console.log(input)
const N = input.shift()
const K = input.pop()
console.log(N, K, input);