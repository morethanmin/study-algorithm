function d(n) {
  let sum = 0
  let num = n
  while (num !== 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return n + sum
}

const resultArray = new Array(10001).fill(true)

for (let i = 0; i <= 10000; i++) {
  resultArray[d(i)] = false
}
for (let s = 0; s < resultArray.length; s++) {
  if (resultArray[s]) console.log(s)
}
