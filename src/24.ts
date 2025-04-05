import numpy as np
from scipy.integrate import odeint

def example_function(x):
    """Define an example function for the system of differential equations."""
    # Example: y = 2x + 3
    return 2 * x[0] + 3

# Initial conditions (optional but recommended)
initial_conditions = [1.0]

# Time points at which to evaluate the solution
times = np.array([1, 2])

# Solve the differential equation
solution = odeint(example_function, initial_conditions, times)

# Print the solution
print("Solution:", solution)
