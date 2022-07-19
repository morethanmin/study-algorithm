const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0]
console.log(input.length)