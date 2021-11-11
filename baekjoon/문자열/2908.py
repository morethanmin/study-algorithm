A, B = input().split()
A = A[::-1]
B = B[::-1]
parsedA = ''.join(A)
parsedB = ''.join(B)
if(parsedA>parsedB):
  print(parsedA)
else:
  print(parsedB)