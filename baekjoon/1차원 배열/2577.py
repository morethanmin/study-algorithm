A = int(input())
B = int(input())
C = int(input())
ABC = A * B * C
result = [0,0,0,0,0,0,0,0,0,0]
while ABC != 0:
  ABC,nmg = divmod(ABC,10)
  result[nmg] = result[nmg] + 1
for i in result:
  print(i)