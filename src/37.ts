import numpy as np
import sympy as sp

# Define symbols and equations
x = sp.symbols('x')
eq1 = x**3 - 2*x + 1
eq2 = x**3 + 4*x - 5

# Solve the system of equations
solution = sp.solve((eq1, eq2), (x))

# Print the solution
print(solution)
