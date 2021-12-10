let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const tempVal = array[j]
        array[j] = array[j - 1]
        array[j - 1] = tempVal
      }
    }
    console.log(array)
  }
}

console.log(`before : ${array}`)
insertionSort(array)
console.log(`after : ${array}`)

export {}
