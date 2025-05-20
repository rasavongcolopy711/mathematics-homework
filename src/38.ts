import math
from sympy import symbols, solve

x = symbols('x')
equation = x**3 - 2*x**2 + 5*x - 1
roots = solve(equation, x)
print(roots)
