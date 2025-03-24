import math
from decimal import Decimal

def calculate_root(n):
    """
    Calculate the square root of n.
    
    Parameters:
    n (int or float): The number to find the square root of.
    
    Returns:
    float: The square root of n.
    """
    if n < 0:
        return "Invalid input. Please enter a non-negative number."
    else:
        sqrt = math.sqrt(n)
        decimal_root = Decimal(sqrt).quantize(Decimal('1e-25'))
        return str(decimal_root)

# Example usage
print(calculate_root(4))  # Output: 2.0
