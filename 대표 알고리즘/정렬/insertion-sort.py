array = [9,8,7,6,5,4,3,2,1]

def insertionSort(array):
  n = len(array)
  for i in range(1, n):
    for j in range(i, 0,-1):
      if array[j-1] > array[j]:
        array[j - 1], array[j] = array[j], array[j - 1]
    print(array)

print("before: ", array)
insertionSort(array)
print("after: ", array)