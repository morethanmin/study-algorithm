array = [9,8,7,6,5,4,3,2,1]

def selectionSort(array):
  n = len(array)
  for i in range(0, n):
    minIdx=i
    for j in range(i, n):
      if(array[minIdx]>array[j]):
        minIdx=j
    array[i], array[minIdx] = array[minIdx], array[i]
    print(array)


print("before: ", array)
selectionSort(array)
print("after: ", array)