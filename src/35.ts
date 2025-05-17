import numpy as np
import sympy as sp

x = sp.symbols('x')
f = x**2 - 3*x + 4
g = x - 1
h = f * g
print(h)
