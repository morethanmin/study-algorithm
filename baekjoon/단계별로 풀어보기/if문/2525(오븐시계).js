const fs = require('fs')
const readFileSyncAddress = '/dev/stdin'
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n')

const [현재시간, 현재분] = input[0].split(' ').map(el => Number(el))
const 요리시간 = Number(input[1])

const 소요시간 = Math.floor((요리시간 + 현재분) / 60)
const 소요분 = (요리시간 + 현재분) % 60

let isOveredHour = isOveredMin = false
let 출력시간 = 출력분 = 0

if (소요분 >= 60) {
  isOveredMin = true
  출력분 = 소요분 - 60
} else {
  출력분 = 소요분
}
if (현재시간 + 소요시간 + (isOveredMin ? 1 : 0) >= 24) {
  isOveredHour = true
  출력시간 = 현재시간 + 소요시간 + (isOveredMin ? 1 : 0) - 24
} else {
  출력시간 = 현재시간 + 소요시간 + (isOveredMin ? 1 : 0)
}
console.log(`${출력시간} ${출력분}`);
