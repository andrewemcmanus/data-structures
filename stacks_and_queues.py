from collections import deque

qq = deque()
qq.append(1)
qq.append(2)
qq.append(3)

# First in, first out.
qq.popleft() # 1
qq.popleft() # 2
qq.popleft() # 3

from collections import deque

stack = []
stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)
stack.append(5)

qq = deque()
while len(stack) > 0:
  qq.append(stack.pop())

while len(qq) > 0:
  stack.append(qq.popleft())

while len(stack) > 0:
  print(stack.pop()) # prints 5, 4, 3, 2, 1

 # True
test_brackets('abc(123)')

#returns True
test_brackets('a[bc(123)]')

#returns True
test_brackets('a{b}{c(1[2]3)}')

#returns True
test_brackets('()')

#returns True -- no brackets = correctly matched
test_brackets('abc123yay')

#returns False -- missing closing bracket
test_brackets('abc(123')

#returns False -- improperly nested
test_brackets('a[bc(12]3)')

#returns False -- improperly nested
test_brackets('a{b}{c(1}[2]3)')

josephus(["James", "John", "Mike", "Josephus"], 1)
# 1 James is eliminated
# 1 John is eliminated
# 1 Mike is eliminated
# Josephus is the only one left.

josephus(["James", "John", "Mike", "Josephus"], 2) # returns "James"
# 1 James is skipped
# 2 John is eliminated
# 1 Mike is skipped
# 2 Josephus is eliminated
# 1 James is skipped
# 2 Mike is eiliminated
# James is the only one left.

josephus(["James", "John", "Mike", "Josephus"], 3) # returns "James"
# 1 James is skipped
# 2 John is skipped
# 3 Mike is eliminated
# 1 Josephus is skipped
# 2 James is skipped
# 3 John is eliminated
# 1 Joshephus is skipped
# 2 James is skipped
# 3 Joshephus is eliminated
# James is the only one left.
