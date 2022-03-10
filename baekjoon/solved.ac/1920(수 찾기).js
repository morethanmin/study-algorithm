const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')
const A = input[1].split(' ').map(el => Number(el))
const B = input[3].split(' ').map(el => Number(el))
const result = new Array()
for (let i = 0; i < B.length; i++) {
  let isExist = 0;
  for (let j = 0; j < A.length; j++) {
    if (B[i] === A[j]) {
      isExist = 1
      break
    }
  }
  result.push(isExist);
}

console.log(result.join('\n'));