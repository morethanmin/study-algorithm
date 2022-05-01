// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['1', '-1']
const [A, B] = input.map(el => (BigInt(el)))
console.log((A + B).toString())
console.log((A - B).toString())
console.log((A * B).toString())