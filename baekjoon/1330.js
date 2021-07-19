const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().split(' ')
const a = Number(input[0])
const b = Number(input[1])

if (a > b) console.log('>')

if (a < b) console.log('<')

if (a === b) console.log('==')
