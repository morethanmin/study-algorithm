import math
score = math.floor(int(input())/10)
if score == 10 or score == 9:
  print('A')
elif score == 8:
  print('B')
elif score == 7:
  print('C')
elif score == 6:
  print('D')
else:
  print('F')