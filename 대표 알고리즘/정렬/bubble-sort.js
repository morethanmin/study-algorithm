let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const tempVal = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tempVal
      }
    }
    console.log(array)
  }
}

console.log(`before : ${array}`)
bubbleSort(array)
console.log(`after : ${array}`)

export {}
