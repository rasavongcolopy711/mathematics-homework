import numpy as np
import pandas as pd
from math import sqrt

def calculate_standard_deviation(data):
    """
    Calculate the standard deviation of the given data.
    
    Parameters:
    - data: A 1-D numpy array or pandas Series
    
    Returns:
    - std_dev: The standard deviation of the input data
    """
    mean = np.mean(data)
    squared_diffs = ((data - mean) ** 2)
    std_dev = sqrt(np.mean(squared_diffs))
    return std_dev

# Example usage and output
numbers = [1, 4, 9, 16, 25]
std_deviation = calculate_standard_deviation(numbers)
print("Standard Deviation:", std_deviation)
