const fs = require('fs')

const inputs = fs.readFileSync('/dev/stdin').toString().split('\n')
const nums = inputs[1].split(' ').map((i) => Number(i))

//중복되는 값 set 자료구조를 이용해 제거 후 정렬
const numsSet = [...new Set(nums)].sort((a, b) => a - b)

let dic = {}
let answer = ''

//numsSet에 있는 값을 dic에 넣어둠.
numsSet.forEach((value, i) => { dic[value] = i })

//해당 값에 맞는 값을 가져온다.
for (let i = 0; i < nums.length; i++) {
  answer += dic[nums[i]] + ' ';
}

console.log(answer);