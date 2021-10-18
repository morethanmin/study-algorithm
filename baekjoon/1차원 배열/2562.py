numList = []
for i in range(9):
  numList = numList + [int(input())]
max = max(numList)
print(max)
print(numList.index(max)+1)