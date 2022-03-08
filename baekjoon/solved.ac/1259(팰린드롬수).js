const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')//.map(el => Number(el))
input.pop() //마지막 줄은 0이 들어가니까 계산에서 제외
input.forEach((val) => {
  let result = true
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== val[val.length - i - 1]) result = false
  }
  console.log(result ? 'yes' : 'no');
})

