let array = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array
  }
}

console.log(`before : ${array}`)
array = mergeSort(array)
console.log(`after : ${array}`)

// export {}
