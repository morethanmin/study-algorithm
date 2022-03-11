const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const result = input[0].split(' ').map(el => Number(el)).reduce((acc, cur) => acc + Math.pow(cur, 2), 0) % 10

console.log(result);
