let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const bubbleSort = (arr) => {
  let result = arr.concat()
  for (let i = 0; i < result.length - 1; i++) {
    for (let y = 0; y < result.length - 1 - i; y++) {
      if (result[y + 1] < result[y]) {
        let temp = result[y + 1]
        result[y + 1] = result[y]
        result[y] = temp
      }
    }
  }
  return result
}

const selectionSort = (arr) => {
  let result = arr.concat()
  for (let i = 0; i < result.length - 1; i++) {
    let minIdx = i
    for (let y = i + 1; y < result.length - i; y++) {
      if (result[minIdx] > result[y]) minIdx = y
    }
    if (result[minIdx] !== result[i]) {
      temp = result[minIdx]
      result[minIdx] = result[i]
      result[i] = temp
    }
  }
  return result
}

const insertionSort = (arr) => {
  let result = arr.concat()
  for (let i = 1; i < result.length; i++) {
    for (let y = i; y > 0; y--) {
      if (result[y] < result[y - 1]) {
        const temp = result[y]
        result[y] = result[y - 1]
        result[y - 1] = temp
      }
    }
  }
  return result
}

console.log(bubbleSort(array))
console.log(selectionSort(array))
console.log(insertionSort(array))

export {}
