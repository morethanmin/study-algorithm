result = 0

def getTime(alphabet):
  if alphabet in ('A','B','C'):
    return 3
  elif alphabet in ('D','E','F'):
    return 4
  elif alphabet in ('G','H','I'):
    return 5
  elif alphabet in ('J','K','L'):
    return 6
  elif alphabet in ('M','N','O'):
    return 7
  elif alphabet in ('P','Q','R','S'):
    return 8
  elif alphabet in ('T','U','V'):
    return 9
  elif alphabet in ('W','X','Y','Z'):
    return 10
  else:
    return 0 

for alphabet in input():
  result = result + getTime(alphabet)
print(result)