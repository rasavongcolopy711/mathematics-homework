import numpy as np
from scipy.optimize import fsolve

def f(x):
    return x ** 2 - 4

x = fsolve(f, 0)
print(x)
