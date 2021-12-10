let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i
    let tempVal = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        minIdx = j
      }
    }
    array[i] = array[minIdx]
    array[minIdx] = tempVal
    console.log(array)
  }
}

console.log(`before : ${array}`)
selectionSort(array)
console.log(`after : ${array}`)

export {}
