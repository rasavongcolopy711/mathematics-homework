import numpy as np

def is_prime(n):
    if n <= 1:
        return False
    if n == 2 or n % 2 == 0:
        return True
    for i in range(3, int(np.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

def find_factors(n):
    factors = []
    for i in range(1, int(np.sqrt(n)) + 1):
        if n % i == 0:
            factors.append(i)
            if (i ** 2) != n and np.sqrt(n) // i not in factors:
                factors.append((i ** 2) // n)
    return factors
