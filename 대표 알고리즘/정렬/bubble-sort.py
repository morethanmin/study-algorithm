array = [9,8,7,6,5,4,3,2,1]

def bubbleSort(array):
  n = len(array)
  for i in range(n-1):
    for j in range(n-1-i):
      if array[j] > array[j+1]:
        array[j], array[j+1] = array[j+1], array[j]
      print(array)

print("before: ", array)
bubbleSort(array)
print("after: ", array)